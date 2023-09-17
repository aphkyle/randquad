let ans = []
let quad = document.getElementById("quad")
let inp = document.getElementById("inp")
let submit = document.getElementById("sub")

let genRand = (a, b, c, d) => {
    // does cool stuff like (ax + by)(cx + dy) and expands it
    let ax = Math.ceil(Math.random() * a)
    let by = Math.ceil(Math.random() * b)
    let cx = Math.ceil(Math.random() * c)
    let dy = Math.ceil(Math.random() * d)

    console.log(Math.random())
    ans.push(`(${ax}x+${by}y)(${cx}x+${dy}y)`)
    ans.push(`(${by}y+${ax}x)(${dy}y+${ax}x)`)
    ans.push(`(${cx}x+${dy}y)(${ax}x+${by}y)`)
    ans.push(`(${dy}y+${cx}x)(${by}y+${ax}x)`)
    return `${ax*cx}x^2 + ${ax*dy + by*cx}xy + ${by * dy}y^2`
}

submit.addEventListener("click", (e) => {
    if (ans.includes(inp.value.replace(/ /g,''))){
        alert("Correct! Refresh to gen another question")
    } else {
        alert(`U on9! answer is ${ans[0]}`)
    }
})

katex.render(genRand(5, 10, 5, 10), quad, {
    throwOnError: false
});