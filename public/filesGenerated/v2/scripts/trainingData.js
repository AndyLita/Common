var global_training_data = {
"presentation": [{
    "id": "presentation-0",
    "pricePageID": "0",
    "background": {
      "src": "images/presentation-0/background.png",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [{
      "type": "standard",
      "id": "tpage-0",
      "elements": [{
        "type": "text",
        "id": "tpage-0_text-0",
        "subtype": "title",
        "value": "Here we write the Title",
        "classes": "red;size-20",
        "style": "",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "400px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-0_text-1",
        "subtype": "subtitle",
        "value": "Here we explain more...",
        "classes": "",
        "style": "font-size: 20px;color: #ff7500;",
        "position": {
          "top": "100px",
          "left": "60px"
        },
        "size": {
          "width": "400px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-0_text-3",
        "subtype": "paragraph",
        "value": "If you have seen this before, you can jump to the last <br>page by clicking this text.",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "160px",
          "left": "60px"
        },
        "size": {
          "width": "550px",
          "height": "45px"
        },
        "action": {
          "animation": "goToPage",
          "type": "onClick",
          "triggerElem": "tpage-0_text-3",
          "hideElem": "",
          "params": "tpage-9"
        }
      },
      {
        "type": "text",
        "id": "tpage-0_text-4",
        "subtype": "paragraph",
        "value": "Click here to jump to popup page!",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "240px",
          "left": "60px"
        },
        "size": {
          "width": "550px",
          "height": "45px"
        },
        "action": {
          "animation": "goToPage",
          "type": "onClick",
          "triggerElem": "tpage-0_text-4",
          "hideElem": "",
          "params": "tpage-4"
        }
      },
      {
        "type": "text",
        "id": "tpage-0_text-5",
        "subtype": "paragraph",
        "value": "Click here to jump to animation page!",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "300px",
          "left": "60px"
        },
        "size": {
          "width": "550px",
          "height": "45px"
        },
        "action": {
          "animation": "goToPage",
          "type": "onClick",
          "triggerElem": "tpage-0_text-5",
          "hideElem": "",
          "params": "tpage-5"
        }
      }
      ]
    }, {
      "type": "standard",
      "id": "tpage-1",
      "elements": [{
        "type": "text",
        "id": "tpage-1_text-0",
        "subtype": "title",
        "value": "Title appears with delay",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "400px",
          "height": "45px"
        },
        "action": {
          "animation": "wipe-up",
          "type": "onLoad",
          "triggerElem": "",
          "hideElem": "",
          "params": "speed=500;delay=500"
        }
      },
      {
        "type": "text",
        "id": "tpage-1_text-1",
        "subtype": "subtitle",
        "value": "Sub-title comes later.. with delay, after title",
        "classes": "",
        "style": "font-size: 20px;color: #ff7500;",
        "position": {
          "top": "100px",
          "left": "60px"
        },
        "size": {
          "width": "700px",
          "height": "45px"
        },
        "action": {
          "animation": "wipe-up",
          "type": "onLoad",
          "triggerElem": "",
          "hideElem": "",
          "params": "speed=500;delay=1500"
        }
      },
      {
        "type": "video",
        "id": "tpage-1_video-0",
        "src": "images/presentation-0/video.mp4",
        "classes": "",
        "style": "",
        "position": {
          "top": "300px",
          "left": "200px"
        },
        "size": {
          "width": "640px",
          "height": "360px"
        },
        "action": {
          "animation": "show",
          "type": "onLoad",
          "triggerElem": "",
          "hideElem": "",
          "params": "speed=500;delay=2000"
        }
      }]
    }, {
      "type": "standard",
      "id": "tpage-2",
      "elements": [{
        "type": "image",
        "id": "tpage-2_image-0",
        "src": "images/presentation-0/1_splash.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "-27px"
        },
        "size": {
          "width": "1024px",
          "height": "687px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-2_text-0",
        "subtype": "title",
        "value": "This is how we animate a page with an image",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "745px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "image",
        "id": "tpage-2_image-1",
        "src": "images/presentation-0/image_2_1_x330_y48_w153_h295.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "-633px",
          "left": "660px"
        },
        "size": {
          "width": "350px",
          "height": "633px"
        },
        "action": {
          "animation": "translate",
          "type": "onLoad",
          "triggerElem": "",
          "hideElem": "",
          "params": "x=0px;y=717px;speed=500;delay=1000;easing=swing"
        }
      }
      ]
    }, {
      "type": "standard",
      "id": "tpage-3",
      "elements": [{
        "type": "text",
        "id": "tpage-3_text-0",
        "subtype": "title",
        "value": "Click me",
        "classes": "",
        "style": "font-size: 40px;color: #ff0000;cursor: pointer",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "155px",
          "height": "45px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-3_text-0",
          "hideElem": "",
          "params": "x=440px;y=440px;speed=500;delay=0;easing=easeInOutBack"
        }
      },{
        "type": "text",
        "id": "tpage-3_text-1",
        "subtype": "paragraph",
        "value": "And here we have a lot of text<br>as much as we may need to write in this paragraph<br>..and it goes on",
        "classes": "",
        "style": "font-size: 15px;color: #ff0000;",
        "position": {
          "top": "160px",
          "left": "60px"
        },
        "size": {
          "width": "452px",
          "height": "66px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }, {
      "type": "standard",
      "id": "tpage-4",
      "elements": [{
        "type": "text",
        "id": "tpage-4_text-0",
        "subtype": "title",
        "value": "Here we animate elements on click",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "620px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-4_text-1",
        "subtype": "subtitle",
        "value": "Click on the images below to open pop-ups, references etc.",
        "classes": "",
        "style": "font-size: 20px;color: #ff7500;",
        "position": {
          "top": "100px",
          "left": "60px"
        },
        "size": {
          "width": "905px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-0",
        "src": "images/presentation-0/trigger_4_1_x36_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "72px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-1",
        "src": "images/presentation-0/trigger_4_2_x99_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "198px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-2",
        "src": "images/presentation-0/trigger_4_3_x162_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "324px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-3",
        "src": "images/presentation-0/trigger_4_4_x225_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "450px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-4",
        "src": "images/presentation-0/trigger_4_5_x288_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "576px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-5",
        "src": "images/presentation-0/trigger_4_6_x352_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "704px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-6",
        "src": "images/presentation-0/trigger_4_7_x415_y72_60x46.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "144px",
          "left": "830px"
        },
        "size": {
          "width": "120px",
          "height": "92px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-7",
        "src": "images/presentation-0/image_4_18_x36_y120_w441_h22.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "240px",
          "left": "72px"
        },
        "size": {
          "width": "882px",
          "height": "58px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-8",
        "src": "images/presentation-0/image_4_10_x36_y147_w439_h97.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "294px",
          "left": "72px"
        },
        "size": {
          "width": "878px",
          "height": "194px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-9",
        "src": "images/presentation-0/image_4_21_x97_y257_w316_h41.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "514px",
          "left": "194px"
        },
        "size": {
          "width": "632px",
          "height": "82px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-10",
        "src": "images/presentation-0/image_4_22_x110_y310_w291_h24.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "620px",
          "left": "220px"
        },
        "size": {
          "width": "582px",
          "height": "48px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-11",
        "src": "images/presentation-0/image_4_11_x36_y160_w187_h84.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "320px",
          "left": "72px"
        },
        "size": {
          "width": "374px",
          "height": "170px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-0",
          "hideElem": "tpage-4_image-13;tpage-4_image-14;tpage-4_image-15;tpage-4_image-16;tpage-4_image-17;tpage-4_image-12",
          "params": "speed=0;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-12",
        "src": "images/presentation-0/image_4_12_x99_y160_w187_h84.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "320px",
          "left": "198px"
        },
        "size": {
          "width": "374px",
          "height": "170px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-1",
          "hideElem": "tpage-4_image-11;tpage-4_image-14;tpage-4_image-15;tpage-4_image-16;tpage-4_image-17;tpage-4_image-13",
          "params": "speed=0;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-13",
        "src": "images/presentation-0/image_4_13_x162_y147_w187_h98.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "295px",
          "left": "324px"
        },
        "size": {
          "width": "374px",
          "height": "170px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-2",
          "hideElem": "tpage-4_image-11;tpage-4_image-12;tpage-4_image-15;tpage-4_image-16;tpage-4_image-17;tpage-4_image-14",
          "params": "speed=0;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-14",
        "src": "images/presentation-0/image_4_14_x225_y147_w187_h98.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "295px",
          "left": "450px"
        },
        "size": {
          "width": "374px",
          "height": "196px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-3",
          "hideElem": "tpage-4_image-13;tpage-4_image-11;tpage-4_image-12;tpage-4_image-16;tpage-4_image-17;tpage-4_image-15",
          "params": "speed=0;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-15",
        "src": "images/presentation-0/image_4_15_x288_y147_w187_h98.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "295px",
          "left": "576px"
        },
        "size": {
          "width": "374px",
          "height": "196px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-4",
          "hideElem": "tpage-4_image-13;tpage-4_image-14;tpage-4_image-11;tpage-4_image-12;tpage-4_image-17;tpage-4_image-16",
          "params": "speed=0;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-16",
        "src": "images/presentation-0/image_4_16_x225_y147_w187_h98.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "295px",
          "left": "450px"
        },
        "size": {
          "width": "374px",
          "height": "196px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-5",
          "hideElem": "tpage-4_image-13;tpage-4_image-14;tpage-4_image-15;tpage-4_image-11;tpage-4_image-12;tpage-4_image-17",
          "params": "speed=0;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-4_image-17",
        "src": "images/presentation-0/image_4_17_x289_y147_w187_h98.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "295px",
          "left": "578px"
        },
        "size": {
          "width": "374px",
          "height": "196px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-4_image-6",
          "hideElem": "tpage-4_image-13;tpage-4_image-14;tpage-4_image-15;tpage-4_image-16;tpage-4_image-11;tpage-4_image-12",
          "params": "speed=0;delay=0"
        }
      }
      ]
    }, 
    {
      "type": "standard",
      "id": "tpage-5",
      "elements": [{
        "type": "image",
        "id": "tpage-5_image-0",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "200px",
          "left": "200px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "wipe-up",
          "type": "onClick",
          "triggerElem": "tpage-5_text-1",
          "hideElem": "",
          "params": "speed=1500;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-5_image-1",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "200px",
          "left": "400px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "wipe-down",
          "type": "onClick",
          "triggerElem": "tpage-5_text-2",
          "hideElem": "",
          "params": "speed=1500;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-5_image-2",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "200px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "wipe-left",
          "type": "onClick",
          "triggerElem": "tpage-5_text-3",
          "hideElem": "",
          "params": "speed=1500;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-5_image-3",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "400px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "wipe-right",
          "type": "onClick",
          "triggerElem": "tpage-5_text-4",
          "hideElem": "",
          "params": "speed=1500;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-5_image-4",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "200px",
          "left": "600px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "show",
          "type": "onClick",
          "triggerElem": "tpage-5_text-5",
          "hideElem": "",
          "params": "speed=1500;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-5_image-5",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "800px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "hide",
          "type": "onClick",
          "triggerElem": "tpage-5_text-6",
          "hideElem": "",
          "params": "speed=1500;delay=0"
        }
      },
      {
        "type": "image",
        "id": "tpage-5_image-6",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "200px",
          "left": "800px"
        },
        "size": {
          "width": "128px",
          "height": "128px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-5_text-7",
          "hideElem": "",
          "params": "x=-200;y=200px;speed=2000;delay=0;easing=swing"
        }
      },
      {
        "type": "text",
        "id": "tpage-5_text-0",
        "subtype": "title",
        "value": "Click the animation names to see them",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-5_text-1",
        "subtype": "title",
        "value": "Wipe-Up",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "150px",
          "left": "200px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-5_text-2",
        "subtype": "title",
        "value": "Wipe-Down",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "150px",
          "left": "400px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-5_text-3",
        "subtype": "title",
        "value": "Wipe-Left",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "350px",
          "left": "200px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-5_text-4",
        "subtype": "title",
        "value": "Wipe-Right",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "350px",
          "left": "400px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-5_text-5",
        "subtype": "title",
        "value": "Show",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "150px",
          "left": "600px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-5_text-6",
        "subtype": "title",
        "value": "Hide",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "350px",
          "left": "800px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-5_text-7",
        "subtype": "title",
        "value": "Translate",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "150px",
          "left": "800px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-6",
      "elements": [{
        "type": "image",
        "id": "tpage-6_image-0",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "100px",
          "left": "200px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-1",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeInCirc"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-1",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "100px",
          "left": "400px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-2",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeOutCirc"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-2",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "100px",
          "left": "600px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-3",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeInOutExpo"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-3",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "100px",
          "left": "800px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-4",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeInOutBack"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-4",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "200px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-5",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeInSine"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-5",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "400px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-6",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeOutBounce"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-6",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "600px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-7",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeInOutQuint"
        }
      },
      {
        "type": "image",
        "id": "tpage-6_image-7",
        "src": "images/presentation-0/red-sq.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "400px",
          "left": "800px"
        },
        "size": {
          "width": "64px",
          "height": "64px"
        },
        "action": {
          "animation": "translate",
          "type": "onClick",
          "triggerElem": "tpage-6_text-8",
          "hideElem": "",
          "params": "x=0;y=216px;speed=1000;delay=0;easing=easeInOutElastic"
        }
      },
      {
        "type": "text",
        "id": "tpage-6_text-0",
        "subtype": "title",
        "value": "Click the easing names to see some of the available effects!",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-6_text-1",
        "subtype": "title",
        "value": "easeInCirc",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "230px",
          "left": "200px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-6_text-2",
        "subtype": "title",
        "value": "easeOutCirc",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "230px",
          "left": "400px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-6_text-3",
        "subtype": "title",
        "value": "easeInOutExpo",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "230px",
          "left": "600px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-6_text-4",
        "subtype": "title",
        "value": "easeInOutBack",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "230px",
          "left": "800px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },{
        "type": "text",
        "id": "tpage-6_text-5",
        "subtype": "title",
        "value": "easeInSine",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "530px",
          "left": "200px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-6_text-6",
        "subtype": "title",
        "value": "easeOutBounce",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "530px",
          "left": "400px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-6_text-7",
        "subtype": "title",
        "value": "easeInOutQuint",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "530px",
          "left": "600px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      },
      {
        "type": "text",
        "id": "tpage-6_text-8",
        "subtype": "title",
        "value": "easeInOutElastic",
        "classes": "",
        "style": "font-size: 20px;color: #ff0000;",
        "position": {
          "top": "530px",
          "left": "800px"
        },
        "size": {
          "width": "600px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }, {
      "type": "standard",
      "id": "tpage-7",
      "elements": [{
        "type": "image",
        "id": "tpage-7_image-0",
        "src": "images/presentation-0/VS_Produktinfo_iPad_12.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }, {
      "type": "standard",
      "id": "tpage-8",
      "elements": [{
        "type": "image",
        "id": "tpage-8_image-0",
        "src": "images/presentation-0/VS_Produktinfo_iPad_13.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }, {
      "type": "standard",
      "id": "tpage-9",
      "elements": [{
        "type": "image",
        "id": "tpage-9_image-0",
        "src": "images/presentation-0/VS_Produktinfo_iPad_14.png",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
  },{
    "id": "presentation-1",
    "pricePageID": "10",
    "background": {
      "src": "",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [
      {
      "type": "standard",
      "id": "tpage-10",
      "elements": [{
        "type": "image",
        "id": "tpage-10_image-0",
        "src": "images/presentation-1/1.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-11",
      "elements": [{
        "type": "image",
        "id": "tpage-11_image-0",
        "src": "images/presentation-1/2.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-12",
      "elements": [{
        "type": "image",
        "id": "tpage-12_image-0",
        "src": "images/presentation-1/3.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-13",
      "elements": [{
        "type": "image",
        "id": "tpage-13_image-0",
        "src": "images/presentation-1/4.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-14",
      "elements": [{
        "type": "image",
        "id": "tpage-14_image-0",
        "src": "images/presentation-1/5.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
  },
  {
    "id": "presentation-2",
    "pricePageID": "15",
    "background": {
      "src": "",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [
      {
      "type": "standard",
      "id": "tpage-15",
      "elements": [{
        "type": "image",
        "id": "tpage-15_image-0",
        "src": "images/presentation-2/01.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-16",
      "elements": [{
        "type": "image",
        "id": "tpage-16_image-0",
        "src": "images/presentation-2/02.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-17",
      "elements": [{
        "type": "image",
        "id": "tpage-17_image-0",
        "src": "images/presentation-2/03.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-18",
      "elements": [{
        "type": "image",
        "id": "tpage-18_image-0",
        "src": "images/presentation-2/04.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-19",
      "elements": [{
        "type": "image",
        "id": "tpage-19_image-0",
        "src": "images/presentation-2/05.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-20",
      "elements": [{
        "type": "image",
        "id": "tpage-20_image-0",
        "src": "images/presentation-2/06.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-21",
      "elements": [{
        "type": "image",
        "id": "tpage-21_image-0",
        "src": "images/presentation-2/07.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-22",
      "elements": [{
        "type": "image",
        "id": "tpage-22_image-0",
        "src": "images/presentation-2/09.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-23",
      "elements": [{
        "type": "image",
        "id": "tpage-23_image-0",
        "src": "images/presentation-2/10.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-24",
      "elements": [{
        "type": "image",
        "id": "tpage-24_image-0",
        "src": "images/presentation-2/11.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
  },
  {
    "id": "presentation-3",
    "pricePageID": "25",
    "background": {
      "src": "",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [
      {
      "type": "standard",
      "id": "tpage-25",
      "elements": [{
        "type": "image",
        "id": "tpage-25_image-0",
        "src": "images/presentation-3/17.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-26",
      "elements": [{
        "type": "image",
        "id": "tpage-26_image-0",
        "src": "images/presentation-3/18.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-27",
      "elements": [{
        "type": "image",
        "id": "tpage-27_image-0",
        "src": "images/presentation-3/19.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-28",
      "elements": [{
        "type": "image",
        "id": "tpage-28_image-0",
        "src": "images/presentation-3/20.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
  },
  {
    "id": "presentation-4",
    "pricePageID": "29",
    "background": {
      "src": "",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [
      {
      "type": "standard",
      "id": "tpage-29",
      "elements": [{
        "type": "image",
        "id": "tpage-29_image-0",
        "src": "images/presentation-4/21.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-30",
      "elements": [{
        "type": "image",
        "id": "tpage-30_image-0",
        "src": "images/presentation-4/22.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-31",
      "elements": [{
        "type": "image",
        "id": "tpage-31_image-0",
        "src": "images/presentation-4/23.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-32",
      "elements": [{
        "type": "image",
        "id": "tpage-32_image-0",
        "src": "images/presentation-4/24.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-33",
      "elements": [{
        "type": "image",
        "id": "tpage-33_image-0",
        "src": "images/presentation-4/25.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
  },
  {
    "id": "presentation-5",
    "pricePageID": "34",
    "background": {
      "src": "",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [
      {
      "type": "standard",
      "id": "tpage-34",
      "elements": [{
        "type": "image",
        "id": "tpage-34_image-0",
        "src": "images/presentation-5/26.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-35",
      "elements": [{
        "type": "image",
        "id": "tpage-35_image-0",
        "src": "images/presentation-5/28.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-36",
      "elements": [{
        "type": "image",
        "id": "tpage-36_image-0",
        "src": "images/presentation-5/29.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-37",
      "elements": [{
        "type": "image",
        "id": "tpage-37_image-0",
        "src": "images/presentation-5/30.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-38",
      "elements": [{
        "type": "image",
        "id": "tpage-38_image-0",
        "src": "images/presentation-5/31.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-39",
      "elements": [{
        "type": "image",
        "id": "tpage-39_image-0",
        "src": "images/presentation-5/32.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-40",
      "elements": [{
        "type": "image",
        "id": "tpage-40_image-0",
        "src": "images/presentation-5/33.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-41",
      "elements": [{
        "type": "image",
        "id": "tpage-41_image-0",
        "src": "images/presentation-5/34.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-42",
      "elements": [{
        "type": "image",
        "id": "tpage-42_image-0",
        "src": "images/presentation-5/35.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-43",
      "elements": [{
        "type": "image",
        "id": "tpage-43_image-0",
        "src": "images/presentation-5/36.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-44",
      "elements": [{
        "type": "image",
        "id": "tpage-44_image-0",
        "src": "images/presentation-5/37.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-45",
      "elements": [{
        "type": "image",
        "id": "tpage-45_image-0",
        "src": "images/presentation-5/38.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-46",
      "elements": [{
        "type": "image",
        "id": "tpage-46_image-0",
        "src": "images/presentation-5/39.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-47",
      "elements": [{
        "type": "image",
        "id": "tpage-47_image-0",
        "src": "images/presentation-5/40.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-48",
      "elements": [{
        "type": "image",
        "id": "tpage-48_image-0",
        "src": "images/presentation-5/41.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },{
      "type": "standard",
      "id": "tpage-49",
      "elements": [{
        "type": "image",
        "id": "tpage-49_image-0",
        "src": "images/presentation-5/42.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
    },
    {
    "id": "presentation-6",
    "pricePageID": "-1",
    "background": {
      "src": "",
      "color": ""
    },
    "header": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "footer": {
      "src": "",
      "size": {
        "width": "",
        "height": ""
      }
    },
    "pages": [
      {
      "type": "standard",
      "id": "tpage-50",
      "elements": [{
        "type": "text",
        "id": "tpage-50_text-0",
        "subtype": "title",
        "value": "This is the reference page!",
        "classes": "red;size-20",
        "style": "",
        "position": {
          "top": "60px",
          "left": "60px"
        },
        "size": {
          "width": "400px",
          "height": "45px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    },
    {
      "type": "standard",
      "id": "tpage-51",
      "elements": [{
        "type": "image",
        "id": "tpage-51_image-0",
        "src": "images/presentation-4/22.jpg",
        "classes": "",
        "style": "",
        "position": {
          "top": "0",
          "left": "0"
        },
        "size": {
          "width": "1024px",
          "height": "768px"
        },
        "action": {
          "animation": "",
          "type": "",
          "triggerElem": "",
          "hideElem": "",
          "params": ""
        }
      }]
    }]
  }]
};