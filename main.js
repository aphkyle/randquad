let ans = []
let quad = document.getElementById("quad")
let inp = document.getElementById("inp")
let submit = document.getElementById("sub")

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

let genRand = (a, b, c, d) => {
    // does cool stuff like (ax + by)(cx + dy) and expands it
    let ax = Math.floor(Math.random() * a) + 1
    let by = (Math.floor(Math.random() * b) + 1) * (Math.sign(Math.random()-0.5))
    let cx = Math.floor(Math.random() * c) + 1
    let dy = (Math.floor(Math.random() * d) + 1) * (Math.sign(Math.random()-0.5))

    dn = gcd(ax, by)
    en = gcd(cx, dy)

    console.log(ax, by, cx, dy)
    console.log(dn, en)

    let res = `${ax*cx}x^2+${ax*dy + by*cx}xy+${by * dy}y^2`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-")
    if (res.includes("0xy")){
        return genRand(a, b, c, d)
    }

    if (dn * en === 1){
        ans.push(`(${ax}x+${by}y)(${cx}x+${dy}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`(${by}y+${ax}x)(${dy}y+${cx}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`(${cx}x+${dy}y)(${ax}x+${by}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`(${dy}y+${cx}x)(${by}y+${ax}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
    } else if (dn === 1){
        cx = Math.floor(cx/en)
        dy = Math.floor(dy/en)
        ans.push(`${en}(${ax}x+${by}y)(${cx}x+${dy}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${en}(${by}y+${ax}x)(${dy}y+${cx}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${en}(${cx}x+${dy}y)(${ax}x+${by}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${en}(${dy}y+${cx}x)(${by}y+${ax}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
    } else if (en === 1){
        ax = Math.floor(ax/dn)
        by = Math.floor(by/dn)
        ans.push(`${dn}(${ax}x+${by}y)(${cx}x+${dy}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${dn}(${by}y+${ax}x)(${dy}y+${cx}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${dn}(${cx}x+${dy}y)(${ax}x+${by}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${dn}(${dy}y+${cx}x)(${by}y+${ax}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
    } else {
        ax = Math.floor(ax/dn)
        by = Math.floor(by/dn)
        cx = Math.floor(cx/en)
        dy = Math.floor(dy/en)
        ans.push(`${dn*en}(${ax}x+${by}y)(${cx}x+${dy}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${dn*en}(${by}y+${ax}x)(${dy}y+${cx}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${dn*en}(${cx}x+${dy}y)(${ax}x+${by}y)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
        ans.push(`${dn*en}(${dy}y+${cx}x)(${by}y+${ax}x)`.replace(/(?<!\d)1([xy])/g, "$1").replace(/(\+\-|\-\+)/g, "-"))
    }

    console.log(ans)
    console.log(res)

    return res
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
