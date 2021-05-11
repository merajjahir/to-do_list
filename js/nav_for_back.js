
//selecting all the classes and stuff


//the whole class of the navigation menu and the icons and the search bar
const the_whole_class = document.getElementById("nav_whole");

//just the menu icon's 
const icons = document.getElementById("all_nav_icons");

//the SEARCH BAR AND THE SUBMIT BUTTON
const search_all = document.getElementById("menu_icon");

//the search Icon
const search_icon = document.getElementById("search_icon");

//the input text field 
let menu_input_query = document.getElementById("input_query_field");

//the input submit field
const input_submit = document.getElementById("input_submit");

//the menu icon button
const button_menu = document.getElementById("i_am_menu");

//the back icon button
const button_back = document.getElementById("i_am_back");

//the setting icon button
const button_setting =document.getElementById("setting_icon");

//the main landing section just the form
const main_landing_section = document.getElementById("main_landing_section");

//the input id i 
const body_section = document.querySelectorAll(':not(#nav_menu,#nav_whole,#all_nav_icons,#iamtheman,#menu_both_icon,#i_am_menu,#i_am_back,button, #search_icon, #menu_icon, #input_query_field, .style_all_input,ul,li,img,input,div)');
// console.log(body_section);
//the setting animation id
// const setting_anim_class = document.getElementsByClassName("setting_anim");

//---------------------------------------------------------------
//-----------------------------------------------------------


//-------------------------------------------------------
//---------------------------------------------------
//-----------------------------------------------


//the values .
const transition_time = "2s";
const small_index = 100 ;
const midd_index = 110 ;
const large_index = 120 ;
const bg_large_index = 130 ;

//the expanding menu

button_menu.addEventListener("click",()=>{

    // the whole menu expanding
    the_whole_class.style.transition = transition_time;
    the_whole_class.style.width = "340px";
    // the_whole_class.style.height = "99vh";
    

    //the transition of the menu icon and the back icon
    button_menu.style.display = "none";
    button_back.style.display = "block";

    //the position of the setting icon
    button_setting.style.position = "absolute";
    button_setting.classList = "setting_anim";

    //the search input field
    search_all.style.opacity = "1";


    // the menu text input field 
    menu_input_query.style.transition= transition_time;
    menu_input_query.style.width = "300px";

    menu_input_query.style.position = "absolute";
    menu_input_query.style.top = "10px";
    menu_input_query.style.left = "10px";
    menu_input_query.style.paddingTop = "10px";
    menu_input_query.style.fontSize = "1.5em";

    

    //the search input submit field     
    input_submit.style.opacity = "1";
    input_submit.style.transition = transition_time+"+"+transition_time;


    //search_icon
    search_icon.style.opacity ="0";
    search_icon.style.transition ="none";



})

//the bakward event function

button_back.addEventListener("click",()=>{
    //the shrinking of the menu field
    the_whole_class.style.width = "100px";

    //the whole menu and back transition
    button_back.style.display = "none";
    button_menu.style.display = "block";

    //setting back to deafault 
    button_setting.classList.replace('setting_anim',"setting_anim_back");
    // console.log(button_setting);


    //search input field
    search_all.style.opacity = "0"; 
    search_icon.style.transition =transition_time;

    //the search input text field
    menu_input_query.style.transition= transition_time;
    menu_input_query.style.width= "0px";

    //the search input submit field 
    input_submit.style.opacity = "0";
    input_submit.style.transition = transition_time;

    //search_icon 
    search_icon.style.opacity ="1";
    // console.log("the backward got excecuted this is ")



})


//the body click function
// console.log(body_section);

// body_section.forEach(one => 
//     { 

        main_landing_section.addEventListener("click",()=>{
            //the shrinking of the menu field
            the_whole_class.style.width = "100px";
        
            //the whole menu and back transition
            button_back.style.display = "none";
            button_menu.style.display = "block";
        
            //setting back to deafault 
            button_setting.classList.replace('setting_anim',"setting_anim_back");
            // console.log(button_setting);
        
        
            //search input field
            search_all.style.opacity = "0"; 
            search_icon.style.transition =transition_time;
        
            //the search input text field
            menu_input_query.style.transition= transition_time;
            menu_input_query.style.width= "0px";
        
            //the search input submit field 
            input_submit.style.opacity = "0";
            input_submit.style.transition = transition_time;
        
            //search_icon 
            search_icon.style.opacity ="1";
            // console.log("this is complication")



        })
    // } );


