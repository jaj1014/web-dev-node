(function () {
  // dumb example script to verify it's working
  const elem = document.createElement('p')
  const text = document.createTextNode('If you can see this, js is compiling and working')
  const p = document.getElementById('test')

  elem.appendChild(text)
  document.body.insertBefore(elem, p)
}())
