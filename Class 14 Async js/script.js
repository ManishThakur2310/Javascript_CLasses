let arr=[];
async function fun1(URL) {
    let res = await fetch(URL);
    let ans = await res.json();
    for(i=0;i<ans.length;i++){
        arr.push(ans[i])
    }
    console.log(arr[0].title);
}

fun1("https://jsonplaceholder.typicode.com/posts")