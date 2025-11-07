// 传统学术主页 - 基本功能

document.addEventListener('DOMContentLoaded', function() {
    // 邮箱复制功能
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            
            // 复制到剪贴板
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    alert('邮箱地址已复制到剪贴板: ' + email);
                });
            } else {
                // 备用方案
                const textarea = document.createElement('textarea');
                textarea.value = email;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('邮箱地址已复制到剪贴板: ' + email);
            }
        });
    });
    
    // 打印功能（可选）
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'p') {
            window.print();
        }
    });
}); 