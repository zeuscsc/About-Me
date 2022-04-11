// Library written by you
interface Comparator {
    compare(a,b):number
}
class BubbleSort{
    public sort(array: any[],comparator:Comparator): number[] {
        array = array.slice();
        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length - 1; j++) {
                if(comparator.compare(array[j],array[j+1])>0){
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        return array;
    }
}



// Programmer that is going to use your library
class User{
    age
    height
}
class AgeCompare implements Comparator{
    compare(a: User, b: User): number {
        return a.age-b.age
    }
}

let users:User[]
users.push({age:1,height:10})
users.push({age:2,height:10})
users.push({age:3,height:10})
let comparator=new AgeCompare()
let sort=new BubbleSort()
sort.sort(users,comparator)