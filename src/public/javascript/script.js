    function hienThongBao() {
      // Tạo một div để chứa thông báo và box chat
      var container = document.createElement("div");
      container.classList.add("container");
      
      // Tạo thông báo đăng ký thành công
      var thongBao = document.createElement("p");
      thongBao.textContent = "Thêm người dùng thành công";
      thongBao.classList.add("thong-bao");
      
      // Tạo box chat
      var boxChat = document.createElement("div");
      boxChat.classList.add("box-chat");
      
      // Thêm thông báo và box chat vào container
      container.appendChild(thongBao);
      container.appendChild(boxChat);
      
      // Thêm container vào body của trang
      document.body.appendChild(container);
    }
