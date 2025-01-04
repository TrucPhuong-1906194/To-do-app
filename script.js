const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){ //Kiểm tra giá trị phần input
        alert("You must write something!"); //Nếu để trống, nhấn button sẽ hiện thông báo alert
    }
    else{ //Nếu không để trống, thực hiện tính năng sau
        let li = document.createElement("li"); //Tạo HTML element với tag name "li" 
        li.innerHTML = inputBox.value; //sử dụng từ đã điền (storing) vào HTML element đã tạo
        listContainer.appendChild(li); //vị trí hiển thị sẽ nằm bên dưới và thuộc div list-container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData(); //gọi để function chạy
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ //Nếu thẻ loại "li" được click (tính năng mới)
        e.target.classList.toggle("checked"); //chuyển đổi sang dạng "checked" theo code như trên
        saveData(); //gọi để function chạy
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //xóa element vừa tạo khi span được click
        saveData(); //gọi để function chạy
    }
}, false);

function saveData(){ //lưu Data trong bộ nhớ bằng cách add vào (inner) code HTML
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();