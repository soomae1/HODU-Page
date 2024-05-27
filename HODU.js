// 1. show more 클릭 시 추가적인 이미지 랜더링 (강사님이 알려주신 거 반영)

    const listPic = document.querySelector('.photo');
    const btn = document.querySelector('.button');
    let pageToPatch = 1;


    btn.addEventListener('click', ()=>{fetchImages(pageToPatch += 1)});

    async function fetchImages(page){
    try{
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`);

    if(!response.ok){
    throw new Error('네트워크 응답에 문제가 있습니다.');
}

    const datas = await response.json();
    console.log(datas);
    makeImageList(datas);

}catch(error){
    console.error(error);
}
}
    function makeImageList(datas){
    datas.forEach((data)=>{
        listPic.insertAdjacentHTML('beforeend', `<li class="img-size"><img src="${data.download_url}" alt=""></li>`);
    });
}


// 2. 카카오 맵 지도 api

const container = document.getElementById('map');
let options = {
    center: new kakao.maps.LatLng(33.4423464,126.5714548),
    level: 3
};

let map = new kakao.maps.Map(container, options);

let markerPosition  = new kakao.maps.LatLng(33.4423464,126.5714548);

let marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

let mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



// 3. Subscribe 버튼 클릭 모달창 - 위치 아무곳이나 했음!

    document.addEventListener('DOMContentLoaded', function() {

    const modalButton = document.querySelector('.modal-button');
    const modalWrap = document.querySelector('.modal-wrap');
    const closeButton = document.querySelector('.close-button');

    // Subscribe 버튼 클릭 시 모달창 보이기
    modalButton.addEventListener("click", function(event) {
    event.preventDefault();
    modalWrap.style.display = 'flex';
    });

    // OK! I Love HODU 버튼 클릭 시 모달창 숨기기
    closeButton.addEventListener('click', function(event) {
    modalWrap.style.display = 'none';
    });
});
