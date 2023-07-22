document.getElementById('googleText').addEventListener('click', function () {
    // アニメーション対象の要素を取得
    var googleText = document.getElementById('googleText');

    // 要素の表示・非表示を切り替える
    if (googleText.style.display === 'none') {
        googleText.style.display = 'block'; // 表示
    } else {
        googleText.style.display = 'none'; // 非表示
    }
});



