"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[16],{16:(b,d,a)=>{a.r(d),a.d(d,{ContactPageModule:()=>C});var g=a(6895),o=a(4556),s=a(3165),u=a(655),c=a(433),n=a(8256),p=a(7133);const m=function(){return["/contacto"]},_=[{path:"",component:(()=>{class t{constructor(e,i,l){this.toolbarService=e,this.alertController=i,this.builder=l,this.slideOptsThumbs={spaceBetween:0,slidesPerView:1.35}}ngOnInit(){this.form=this.builder.group({numPhone:["",c.kI.required]}),this.toolbarService.setToolbarSettings("Cont\xe1ctanos",!0,!1)}presentAlert(){return(0,u.mG)(this,void 0,void 0,function*(){const e={header:"",subHeader:"",message:""};""!=this.form.value.numPhone&&null!=this.form.value.numPhone?(e.header="De acuerdo",e.subHeader=this.form.value.numPhone,e.message="Te llamaremos!"):(e.header="Error",e.subHeader="N\xfamero de tel\xe9fono",e.message="Por favor, ingrese un n\xfamero de tel\xe9fono"),yield(yield this.alertController.create(e)).present()})}openPhoneNumber(){window.open("tel:3204377068","_self")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.O),n.Y36(o.Br),n.Y36(c.QS))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-contact-page"]],decls:88,vars:4,consts:[[1,"screen-contact"],[1,"contact-banner"],[1,"contact-banner__content"],[1,"contact-banner__title"],[1,"contact-banner__description"],[1,"card-auxiliares"],[3,"options"],[2,"--background","#dbe2ff"],[1,"card-text"],[1,"title"],["name","location-outline","id","location-outline"],[1,"subtitle"],[1,"description"],[1,"address"],[1,"address-description"],[2,"width","55%"],["href","geo:7.14084,-73.11944?q=universidad industrial de santander",2,"--background","#1d4390","margin","0"],["slot","start","name","walk-outline"],["src","https://firebasestorage.googleapis.com/v0/b/buscame-58de2.appspot.com/o/card1%20emergencia.png?alt=media&token=3773be03-7950-4a43-bfba-3d60d0f09240",1,"card-image"],[2,"--background","#fedada"],["name","call-sharp","id","call-sharp"],[1,"subtitle",2,"color","#40000d"],[1,"description",2,"color","#40000d"],[1,"phone-number",2,"color","#40000d"],[2,"--background","#92002a","width","80%",3,"routerLink","click"],[1,"material-icons",2,"font-size","24px"],["src","https://firebasestorage.googleapis.com/v0/b/buscame-58de2.appspot.com/o/card2%20emergencia.png?alt=media&token=81fc68c4-0de2-4140-b187-65106542f9b9",2,"position","absolute","bottom","-10px","right","-25px","filter","opacity(0.5) drop-shadow(0 0 0 #001847)"],[1,"material-icons",2,"color","#395ba9","font-size","27px"],[1,"subtitle",2,"color","#001847"],[1,"num-phone"],[3,"formGroup"],[2,"--background","transparent","margin","0"],["type","number","placeholder","Digita un n\xfamero","formControlName","numPhone"],[2,"--background","#1d4390","width","85%","z-index","2",3,"click"],["src","https://firebasestorage.googleapis.com/v0/b/buscame-58de2.appspot.com/o/card2%20emergencia.png?alt=media&token=81fc68c4-0de2-4140-b187-65106542f9b9",2,"position","absolute","bottom","0","right","-5px","z-index","1"],[1,"screen-two"],["name","help-buoy-outline","id","logo","size","large"],[1,"store-banner"],[1,"store-banner__content"],[1,"store-banner__title"],[1,"store-banner__description"],[1,"card-logos",2,"margin-bottom","50px"],["src","https://firebasestorage.googleapis.com/v0/b/buscame-58de2.appspot.com/o/Logos.png?alt=media&token=9882d580-dff9-4b07-9572-80f0c0bf9971",1,"img-slide"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),n._uU(5,"Estamos para ayudarte"),n.qZA(),n.TgZ(6,"p",4),n._uU(7," Tenemos tres opciones por las que podemos charlar. Dale sin dudas a cualquiera y nos pondremos en contacto de una. "),n.qZA()()(),n.TgZ(8,"div",5)(9,"ion-slides",6)(10,"ion-slide")(11,"ion-card",7)(12,"div",8)(13,"div",9),n._UZ(14,"ion-icon",10),n.qZA(),n._UZ(15,"br"),n.TgZ(16,"div",11),n._uU(17,"Encu\xe9ntranos"),n.qZA(),n._UZ(18,"br"),n.TgZ(19,"div",12),n._uU(20,"Estamos ubicados en:"),n.qZA(),n._UZ(21,"br"),n.TgZ(22,"div",13),n._uU(23,"Carrera 37 #51 - 52"),n.qZA(),n._UZ(24,"br"),n.TgZ(25,"div",14),n._uU(26," Cabecera, Bucaramanga, Santander "),n.qZA(),n._UZ(27,"br"),n.TgZ(28,"div",15)(29,"ion-button",16),n._UZ(30,"ion-icon",17),n._uU(31," Como llegar"),n.qZA()()(),n._UZ(32,"img",18),n.qZA()(),n.TgZ(33,"ion-slide")(34,"ion-card",19)(35,"div",8)(36,"div",9),n._UZ(37,"ion-icon",20),n.qZA(),n._UZ(38,"br"),n.TgZ(39,"div",21),n._uU(40,"Ll\xe1manos"),n.qZA(),n._UZ(41,"br"),n.TgZ(42,"div",22),n._uU(43," Estamos disponibles para ti "),n.qZA(),n._UZ(44,"br"),n.TgZ(45,"div",23),n._uU(46," (607) 691 09 - 80 "),n.qZA(),n._UZ(47,"br"),n.TgZ(48,"div",22),n._uU(49," O puedes presionar el bot\xf3n debajo para ir directamente a la llamada "),n.qZA(),n.TgZ(50,"ion-button",24),n.NdJ("click",function(){return i.openPhoneNumber()}),n.TgZ(51,"span",25),n._uU(52,"phone_in_talk"),n.qZA(),n._uU(53,"Llamar ahora"),n.qZA()(),n._UZ(54,"img",26),n.qZA()(),n.TgZ(55,"ion-slide")(56,"ion-card",7)(57,"div",8)(58,"div",9)(59,"span",27),n._uU(60,"phone_callback"),n.qZA()(),n._UZ(61,"br"),n.TgZ(62,"div",28),n._uU(63,"Te llamamos"),n.qZA(),n._UZ(64,"br"),n.TgZ(65,"div",12),n._uU(66," D\xe9janos tu n\xfamero, te llamaremos de una "),n.qZA(),n.TgZ(67,"div",29)(68,"form",30)(69,"ion-item",31),n._UZ(70,"ion-input",32),n.qZA()()(),n._UZ(71,"br"),n.TgZ(72,"ion-button",33),n.NdJ("click",function(){return i.presentAlert()}),n.TgZ(73,"span",25),n._uU(74,"add_call"),n.qZA(),n._uU(75,"Agendar llamada"),n.qZA()(),n._UZ(76,"img",34),n.qZA()()()(),n.TgZ(77,"div",35),n._UZ(78,"ion-icon",36),n.TgZ(79,"div",37)(80,"div",38)(81,"h1",39),n._uU(82," Tambi\xe9n puedes dirigirte a una de las tiendas de nuestra red de apoyo "),n.qZA(),n.TgZ(83,"p",40),n._uU(84," Escoge uno de los establecimientos aliados que est\xe9 m\xe1s cerca de ti, all\xed te brindar\xe1n todo el apoyo necesario "),n.qZA()()()(),n.TgZ(85,"div",41)(86,"ion-card"),n._UZ(87,"img",42),n.qZA()()()()),2&e&&(n.xp6(9),n.Q6J("options",i.slideOptsThumbs),n.xp6(41),n.Q6J("routerLink",n.DdM(3,m)),n.xp6(18),n.Q6J("formGroup",i.form))},dependencies:[o.YG,o.PM,o.W2,o.gu,o.pK,o.Ie,o.A$,o.Hr,o.as,o.YI,s.rH,c._Y,c.JJ,c.JL,c.sg,c.u],styles:[".screen-contact[_ngcontent-%COMP%]{background:#f6feff;min-height:100vh;display:flex;flex-direction:column;padding-top:55px}.screen-contact[_ngcontent-%COMP%]   .contact-banner__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.screen-contact[_ngcontent-%COMP%]   .contact-banner__content[_ngcontent-%COMP%]   .contact-banner__title[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:600;font-size:24px;line-height:32px;text-align:center;color:#001f26;margin:0}.screen-contact[_ngcontent-%COMP%]   .contact-banner__content[_ngcontent-%COMP%]   .contact-banner__description[_ngcontent-%COMP%]{margin:0;padding:0 80px;font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:16px;text-align:center;color:#40000d}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]{margin-top:25px}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{min-height:280px;width:240px}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{display:flex;padding:20px;justify-content:start;flex-direction:column}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#001847;font-family:Roboto;font-style:normal;font-weight:700;text-align:start;font-size:24px}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#001847;font-family:Roboto;font-style:normal;font-weight:600;text-align:start;font-size:24px}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#001847;font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;text-align:start}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{color:#001847;font-family:Roboto;font-style:normal;font-weight:600;font-size:14px;line-height:20px;text-align:start}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .address-description[_ngcontent-%COMP%]{color:#001847;font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;text-align:start}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:600;font-size:14px;line-height:20px;text-align:start}.screen-contact[_ngcontent-%COMP%]   .card-auxiliares[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{position:absolute;bottom:0;right:-5px}.screen-contact[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{height:100%}.screen-contact[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px;height:650px;width:500px}.screen-contact[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{height:100%;width:500px;--border: 0;--border-radius: 0;border-radius:0}.screen-contact[_ngcontent-%COMP%]   .custom-slider[_ngcontent-%COMP%]   .img-slide[_ngcontent-%COMP%]{height:100%;width:140%}.screen-contact[_ngcontent-%COMP%]   .screen-two[_ngcontent-%COMP%]{background:#f6feff;width:100%;display:flex;flex-direction:column}.screen-contact[_ngcontent-%COMP%]   .screen-two[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]{position:relative;top:5px;right:500px;bottom:500px;left:185px;color:#be0039}.screen-contact[_ngcontent-%COMP%]   .screen-two[_ngcontent-%COMP%]   .store-banner__content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.screen-contact[_ngcontent-%COMP%]   .screen-two[_ngcontent-%COMP%]   .store-banner__content[_ngcontent-%COMP%]   .store-banner__title[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:600;font-size:24px;size:16px;line-height:32px;text-align:center;color:#001f26;margin:10px 15% 0}.screen-contact[_ngcontent-%COMP%]   .screen-two[_ngcontent-%COMP%]   .store-banner__content[_ngcontent-%COMP%]   .store-banner__description[_ngcontent-%COMP%]{margin:0;padding:0 80px;font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:16px;text-align:center;color:#001847}.img-slide[_ngcontent-%COMP%]{height:100%;width:100%}.num-phone[_ngcontent-%COMP%]{display:flex;justify-content:start;padding:0}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(_),s.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[o.Pc,g.ez,f,c.UX]}),t})()}}]);