    $(function(){
        $(".name").typed({
            strings: ["Rose ^100 Xu^1000"],
            typeSpeed: 100,
            onStringTyped: function() {
                $(".typed-cursor").hide();
                $(".job").typed({
                    strings: ["<br>Developer"],
                    typeSpeed: 100
                });
            }
        });
    });