---
title: "Uncovering the truth: The secrets behind how VPN really works"
slug: secrets behind how VPN really works
lang: en-In
---

VPN is often explained as this magical encrypted tunnel that "protects" your identity. But these description are very abstract and often sometimes misleading.

I'm not an expert in networking but I know enough to explain what really happens under the hood when you enable VPN. So I'm going to explain what really happens under the hood when you enable a VPN. So I'm going to assume I'm talking to software engineers (those are my audience after all).

To know how VPN works here is a simple example with an http server.

Let's say you want to connect to google (e.g. IP 1.2.3.4) port 80 let us assume your source ip is 6.6.6.6. This is really your public router IP and not your private laptop or device IP so I'm going to skip NAT for simplicity.

Normally with no VPN, your client sends a SYN segment to port 80 that goes into IP packet with a destination IP 1.2.3.4 and source IP 6.6.6.6 and google replies back directy to you with SYN/ACK destination IP 6.6.6.6 and source IP 1.2.3.4 and this goes on. Your ISP sees the IP packet you are sending back and forth to 1.2.3.4. They can choose to deep inspect it, and see the content, they (the ISP and pretty much anyone in between) can do that in case of plaintext HTTP (port 80) but not really on HTTPS (port 443).

![](/img/blog/VPNWorking/packet-sending.webp)

Now say you deploy a UDP based VPN, and you use a VPN server on IP 3.3.3.3. The client still produces the SYN IP packet with destination 1.2.3.4 and source IP 6.6.6.6 but then the VPN client captures that IP packet (which you are sending), encrypts it and put it on a new UDP datagram with VPN info and that UDP goes into a new IP packet destination 3.3.3.3 source is 6.6.6.6.

![](/img/blog/VPNWorking/encrypting-packet.webp)

So your ISP see you going to 3.3.3.3 (VPN server) and not (1.2.3.4), and your ISP cannot see your search history or the specific website your visit, because that is encrypted and encapsulated in that outer ip packet vpn server recives the ip packet unpack decrypt it (complex logic must find the key etc) then sees that which guy want to go to 1.2.3.4 and creates a brand new ip packet (or reuse for zero copy) changing the source ip to its own 3.3.3.3 so that SYN reaches google.


![](/img/blog/VPNWorking/packet-sending.webp)

Google replies back to 3.3.3.3 with SYN/ACK the VPN server which knows that this packet must go to you (6.6.6.6), so it creates a new IP packet with its source ip 3.3.3.3 and destination ip 6.6.6.6 and puts the SYN/ACK in it.

Your ISP can track your VPN use by seeing that you're connected to a VPN server but won't konw what you are doing. 
They'll always know the VPN's IP address but not the data packet's final destination. 
Your ISP and in-betweens can see what and for how long you connect, but they won't konw what website you're on.
your ISP won't be able to see what you are downloading but they can guess what activity you're doing based on the amount of bandwidth you are using. for example, streaming, torrents, downloading files, etc.

So in summary the VPN does not terminate the TCP it simply passes the SYN all the way through it, so you get an end to end TCP connection between you and google through this encrypted tunnel.

The same thing happen when you use TLS, the TLS(Transport Layer Security) client hello is forwarded all the way to google through the VPN just like any other packet. That is why you also get an end-to-end encryption and the VPN cannot really read HTTPS traffic as well. That means yes you take the hit of double encryption and decryption when using VPN.

### Why UDP and not TCP for VPN? 
You can but you might get TCP meltdown as the two congestion algorightm fight each other (outer and inner TCP connection). With UDP it is easy to retransmit only the lost packets and have a simpler retry logic without all the complexity of TCP.
