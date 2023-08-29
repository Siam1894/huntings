const loadphone = async (SearchText='12', isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${SearchText}`
  );

  const data = await res.json();
  const phone = data.data;
  //console.log(phone);
  displayPhone(phone, isShowAll);
};
const displayPhone = (phone, isShowAll) => {
const phoneContainer = document.getElementById('phone-container');
const showAllContainer = document.getElementById('show-all-container');
if(phone.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
}
else{
    showAllContainer.classList.add('hidden')
}

 if(!isShowAll){
    phone = phone.slice(0, 12);
 }

phoneContainer.textContent = '';
phone.forEach((phone) => {
//console.log(phone);
const phoneCard = document.createElement("div");
phoneCard.classList = `card bg-gray-100 shadow-xl`;
phoneCard.innerHTML = `<figure class="px-10 pt-10">
<img src="${phone.image} " alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body items-center text-center">
<h2 class="card-title">${phone.phone_name}</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div class="card-actions">
<button onclick="ShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
</div>
</div>`;
phoneContainer.appendChild(phoneCard);
  });
  togoleLoadingboll(false);
};


const handelSearch = (isShowAll) =>{
    togoleLoadingboll(true);
 const searchFeal = document.getElementById('search-feald');
 const searchValue = searchFeal.value;
 loadphone(searchValue, isShowAll);

}

const togoleLoadingboll = (isloading) => {
    const loadingboll = document.getElementById('loding-boll');
    if(isloading){
        loadingboll.classList.remove('hidden');
    }
    else{
        loadingboll.classList.add('hidden');

    }

}
const handelShowAll = () => {
    handelSearch(true);

}

const ShowDetails = async (id) => {
    console.log('guta maroken', id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
   const phone = data.data;

    showTheModal(phone);


}
const showTheModal = (phone) => {
    my_modal_5.showModal();
const modulsdetaisvars = document.getElementById('modal-detalis-vars');
modulsdetaisvars.innerHTML = `<img src="${phone.image}" alt="">`;
const moduldetails = document.getElementById('modul-detailses');
moduldetails.innerHTML = phone.name;

console.log(phone)

}

loadphone();
