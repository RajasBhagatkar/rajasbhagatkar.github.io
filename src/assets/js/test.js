class solution{
    constructor(number){
        this.book = {};
    }

    add(name, age){
        // let {name, age}= this;
        if(age<20){
            throw new Error("Staff memmber age must be greater than 20")
        }
        this.book[name] = age;
    }
    remove(name){
        if(this.book[name]){
            delete this.book[name];
            return true;
        }else{
            return false;
        }

    }

    getSize(){
        return Object.keys(this.book).length;
    }
    print(){
        console.log([this.book]);
    }
}

// const _solution = new solution(2);

// _solution.add('Robin', 23)
// _solution.add('DevilDesk',20)

// console.log(_solution.getSize())

// console.log(_solution.remove('Robin'))
// // 
// console.log(_solution.getSize())
// _solution.print()

function dataFinder(data){
    
}
