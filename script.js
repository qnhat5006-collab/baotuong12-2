// 1. Khởi tạo hiệu ứng AOS (Animation On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// 2. Logic ẩn/hiện Chatbox
let isChatOpen = false;

function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    const icon = document.getElementById('chat-icon');
    
    if (isChatOpen) {
        // Đóng chatbox
        chatbox.classList.add('translate-y-[260px]');
        icon.innerText = "▲";
    } else {
        // Mở chatbox
        chatbox.classList.remove('translate-y-[260px]');
        icon.innerText = "▼";
    }
    isChatOpen = !isChatOpen;
}

// 3. Hàm gửi góp ý
function sendFeedback() {
    const name = document.getElementById('user-name').value;
    const comment = document.getElementById('user-comment').value;

    if (name.trim() && comment.trim()) {
        alert("Cảm ơn " + name + "! Ý kiến của bạn đã được gửi thành công.");
        // Xóa trắng ô nhập sau khi gửi
        document.getElementById('user-name').value = "";
        document.getElementById('user-comment').value = "";
        toggleChat(); // Tự động thu gọn sau khi gửi
    } else {
        alert("Vui lòng điền đầy đủ Họ tên và Ý kiến đóng góp!");
    }
}