$(document).ready(function(){
    const menu = $(".menu_horizontal > nav");
    const elem_menu = $(".menu_horizontal > div");
    var active = true;
    
	menu.click(function(){
        elem_menu.removeClass("menu_horizontal_mob");
        if(active){
            $(elem_menu).removeClass("ham_button_disactive");
            $(elem_menu).addClass("ham_bitton_active");
            // elem_menu.css("display", "block");
            active = !active;
        }else{
            $(elem_menu).removeClass("ham_bitton_active");
            $(elem_menu).addClass("ham_button_disactive");
            // elem_menu.css("display", "none");
            active = !active;
        }
    });
    
});