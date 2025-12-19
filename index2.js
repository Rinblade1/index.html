const search = document.querySelector('.search-box input')
const modal = document.getElementById('modal')
const modalContent = document.querySelector('.modal-content')
const closeBtn = document.querySelector('.close')
const clickSound = document.getElementById('clickSound')

search.addEventListener('focus',()=>{
    search.parentElement.style.boxShadow = '0 0 15px rgba(139,94,60,.5)'
})

search.addEventListener('blur',()=>{
    search.parentElement.style.boxShadow = 'none'
})

document.querySelectorAll('.sound').forEach(el=>{
    el.addEventListener('click',()=>{
        clickSound.currentTime = 0
        clickSound.play()
    })
})

function openModal(content){
    modalContent.innerHTML = content
    modal.style.display = 'flex'
}

closeBtn.onclick = ()=> modal.style.display = 'none'
window.onclick = e => e.target === modal && (modal.style.display = 'none')

document.querySelectorAll('.open-contact').forEach(el=>{
    el.onclick = ()=> openModal(`
        <h2>Contact Information</h2>
        <p>Phone: __________</p>
        <p>Email: __________</p>
        <p>Location: __________</p>
    `)
})

document.querySelector('.open-terms').onclick = ()=> openModal(`
    <h2>Terms & Conditions</h2>
    <p>All purchases are subject to availability and verification. Content can be edited.</p>
`)

document.querySelector('.open-privacy').onclick = ()=> openModal(`
    <h2>Privacy Policy</h2>
    <p>Your data is protected. No information is shared without consent.</p>
`)

document.querySelector('.open-returns').onclick = ()=> openModal(`
    <h2>Returns & Exchanges</h2>
    <p>Items can be returned within specified days in original condition.</p>
`)

document.querySelector('.open-shipping').onclick = ()=> openModal(`
    <h2>Shipping Information</h2>
    <p>Delivery timelines depend on location. Tracking provided.</p>
`)
