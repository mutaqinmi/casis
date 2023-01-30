$(document).ready(function(){
    $(".form").hide();
    $(window).on("click", function(){
        $(".labeltag").fadeOut(1000)
        $(".form").delay(1000).slideDown(1000)
    })
    $("#toabout").on("click", function(){
        location.href = "https://wa.me/6285155114492?text=Assalamualaikum,%20Kang%20izin%20bertanya..."
    })
    $(".confirm").on("click", function(){
        var n = $("#nama").val().split(" ")
        var k = $("#kelas").val().split(" ")
        var m = $("#motivasi").val().split(" ")
        
        var nama = n.join("%20")
        var kelas = k.join("%20")
        var motivasi = m.join("%20")
        
        location.href = "https://wa.me/6285155114492?text=Assalamualaikum%20kang%20izin%20berbicara.%20Siap,%20nama%20*" + nama + "*%20kelas%20*X*%20*" + kelas + "*%20ingin%20mengikuti%20CASIS%20OSIS%20SMK%20Negeri%202%20Tasikmalaya%20dengan%20motivasi%20ingin%20" + motivasi + ",%20Terimakasih."
    })
})