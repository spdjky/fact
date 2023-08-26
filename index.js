const publish = document.getElementById("publish")
const text_fact = document.getElementById("text_fact")
const text_source = document.getElementById("text_source")
const category = document.getElementById("category-opt")
const facts = document.getElementById("facts")
publish.addEventListener("click", addfact)

function addfact(){
  const top_fact = document.getElementById("top_fact")
  const fact = document.createElement("p")
  fact.innerHTML = text_fact.value
  const source = document.createElement("a")
  source.appendChild(document.createTextNode("(source)"))
  source.href = "http://" + text_source.value
  source.target = "_blank"
  cate = document.createElement("span")
  cate.innerHTML = "➡️" + category.value
  const button_div = document.createElement("div")
  const btn1 = document.createElement("button")
  const btn2 = document.createElement("button")
  const btn3 = document.createElement("button")
  btn1.innerHTML = "👍 <strong>" + eval("Math.floor(Math.random() * (34 - 3 + 1)) + 3") + "</strong>"
  button_div.appendChild(btn1)
  btn2.innerHTML = "👎 <strong>" + eval("Math.floor(Math.random() * (34 - 3 + 1)) + 3") + "</strong>"
  button_div.appendChild(btn2)
  btn3.innerHTML = "🔥 <strong>" + eval("Math.floor(Math.random() * (34 - 3 + 1)) + 3") + "</strong>"
  button_div.appendChild(btn3)

  fact.classList.add("fact")
  cate.classList.add("fact-category")
  button_div.classList.add("react-btn-div")
  btn1.classList.add("btn" ,"like")
  btn2.classList.add("btn", "dislike")
  btn3.classList.add("btn", "fire")
  fact.appendChild(source)
  fact.appendChild(cate)
  facts.insertBefore(fact, top_fact)
  facts.insertBefore(button_div, top_fact)
  top_fact.removeAttribute("id")
  fact.id = "top_fact"
}
