(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{UE8e:function(l,e,n){"use strict";n.r(e);var u=n("8Y7J");class t{}var a=n("9AJC"),o=n("pMnS"),s=n("SVse"),i=n("G0yt"),r=n("xdbM"),c=n("Lt53");class d{constructor(l){this.invoicesService=l,this.alerts=[],this.sliders=[],this.invoiceReport=[],this.currency="AED:",this.barChartColors=[{backgroundColor:"rgb(57, 194, 184)"},{backgroundColor:"rgb(237, 182, 24)"},{backgroundColor:"rgb(237, 148, 24)"},{backgroundColor:"rgb(237, 112, 24)"},{backgroundColor:"rgb(237, 64, 24)"}],this.barChartOptions={maintainAspectRatio:!1,tooltips:{enabled:!1},scales:{yAxes:[{stacked:!0,maxBarThickness:100,barThickness:64,gridLines:{drawBorder:!1,display:!1},ticks:{display:!1}}],xAxes:[{gridLines:{drawBorder:!1,display:!1},ticks:{display:!1}}]}},this.barChartLabels=[],this.barChartType="horizontalBar",this.barChartLegend=!1,this.barChartData=[];let e=this;this.sliders.push({imagePath:"assets/images/slider1.jpg",label:"First slide label",text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{imagePath:"assets/images/slider2.jpg",label:"Second slide label",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{imagePath:"assets/images/slider3.jpg",label:"Third slide label",text:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."}),this.alerts.push({id:1,type:"success",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"},{id:2,type:"warning",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"}),setTimeout(function(){e.callInvoiceReceivableReport()},2e3)}ngOnInit(){}callInvoiceReceivableReport(){this.invoicesService.getInvoicesReport("invoices").subscribe(l=>{if(200===l.status||304===l.status){const e=l.json().rows;this.invoiceReport=[...e],this.invoiceReport=this.invoiceReport[0],this.loadReceivableReport()}else this.invoiceReport=[]})}loadReceivableReport(){console.log(JSON.stringify(this.invoiceReport.current_receivable)),this.barChartLabels=[],this.barChartData.push({data:[this.invoiceReport.current_receivable],label:"current",stack:"a"},{data:[this.invoiceReport.overdue_receivable15],label:"1-15",stack:"a"},{data:[this.invoiceReport.overdue_receivable30],label:"15-30",stack:"a"},{data:[this.invoiceReport.overdue_receivable45],label:"30-45",stack:"a"},{data:[this.invoiceReport.overdue_receivable_above45],label:"Above 45 days",stack:"a"})}closeAlert(l){const e=this.alerts.indexOf(l);this.alerts.splice(e,1)}}var p=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function v(l){return u["\u0275vid"](0,[u["\u0275pid"](0,s.DecimalPipe,[u.LOCALE_ID]),(l()(),u["\u0275eld"](1,0,null,null,77,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Dashboard "])),(l()(),u["\u0275eld"](4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,27,"div",[["class","row "]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,26,"div",[["class","mt-16 col col-sm-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,4,"h5",[["class","text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Total Receivables "])),(l()(),u["\u0275eld"](9,16777216,null,null,2,"summary",[["class","badge badge-light"],["ngbPopover","Current: The amount that you are yet to receive for invoices that have not crossed the payment due date.\n                Overdue: The amount you are yet to receive for invoices that have crossed the due date.\n                "],["placement","bottom"],["popoverTitle","Total Receivables section displays how much money your customers owe you"]],null,null,null,null,null)),u["\u0275did"](10,737280,null,0,i.M,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,i.N,u.NgZone,s.DOCUMENT,u.ChangeDetectorRef,u.ApplicationRef],{ngbPopover:[0,"ngbPopover"],popoverTitle:[1,"popoverTitle"],placement:[2,"placement"]},null),(l()(),u["\u0275ted"](-1,null,[" ? "])),(l()(),u["\u0275eld"](12,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,5,"figure",[["class","figure col-sm-3 col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,2,"h1",[["class","lite-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](16,null,["",""])),u["\u0275ppd"](17,1),(l()(),u["\u0275eld"](18,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Total Receivables"])),(l()(),u["\u0275eld"](20,0,null,null,8,"figure",[["class","figure col-sm-9 col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,5,"h1",[["class","lite-text"]],null,null,null,null,null)),u["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](23,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["\u0275pod"](24,{color:0}),(l()(),u["\u0275ted"](25,null,["",""])),u["\u0275ppd"](26,1),(l()(),u["\u0275eld"](27,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Total Over Due"])),(l()(),u["\u0275eld"](29,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](30,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,1,"canvas",[["baseChart",""],["height","60px"],["style","margin-left:-15px"],["width","100%"]],null,null,null,null,null)),u["\u0275did"](32,737280,null,0,r.BaseChartDirective,[u.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},null),(l()(),u["\u0275eld"](33,0,null,null,45,"div",[["class","row "]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,9,"div",[["class","col col-md-12 col-lg-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,8,"figure",[["class","figure"]],null,null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Current"])),(l()(),u["\u0275eld"](38,0,null,null,5,"h1",[["class","lite-text"]],null,null,null,null,null)),u["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](40,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["\u0275pod"](41,{color:0}),(l()(),u["\u0275ted"](42,null,["",""])),u["\u0275ppd"](43,1),(l()(),u["\u0275eld"](44,0,null,null,34,"div",[["class","col col-md-12 col-lg-9"]],null,null,null,null,null)),(l()(),u["\u0275eld"](45,0,null,null,33,"div",[["class","row"],["style","align-items: baseline;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](46,0,null,null,11,"div",[["class","col col-md-3 col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](47,0,null,null,10,"figure",[["class","figure"]],null,null,null,null,null)),(l()(),u["\u0275eld"](48,0,null,null,4,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),u["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](50,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["\u0275pod"](51,{color:0}),(l()(),u["\u0275ted"](-1,null,["Over Due"])),(l()(),u["\u0275eld"](53,0,null,null,2,"h1",[["class","lite-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](54,null,["",""])),u["\u0275ppd"](55,1),(l()(),u["\u0275eld"](56,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["1-15 days"])),(l()(),u["\u0275eld"](58,0,null,null,6,"div",[["class","col col-md-3 col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](59,0,null,null,5,"figure",[["class","figure"]],null,null,null,null,null)),(l()(),u["\u0275eld"](60,0,null,null,2,"h1",[["class","lite-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](61,null,["",""])),u["\u0275ppd"](62,1),(l()(),u["\u0275eld"](63,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["16-30 days"])),(l()(),u["\u0275eld"](65,0,null,null,6,"div",[["class","col col-md-3 col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](66,0,null,null,5,"figure",[["class","figure"]],null,null,null,null,null)),(l()(),u["\u0275eld"](67,0,null,null,2,"h1",[["class","lite-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](68,null,["",""])),u["\u0275ppd"](69,1),(l()(),u["\u0275eld"](70,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["31-45 days"])),(l()(),u["\u0275eld"](72,0,null,null,6,"div",[["class","col col-md-3 col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](73,0,null,null,5,"figure",[["class","figure"]],null,null,null,null,null)),(l()(),u["\u0275eld"](74,0,null,null,2,"h1",[["class","lite-text"]],null,null,null,null,null)),(l()(),u["\u0275ted"](75,null,["",""])),u["\u0275ppd"](76,1),(l()(),u["\u0275eld"](77,0,null,null,1,"figcaption",[["class","figure-caption"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["45 days and above"]))],function(l,e){var n=e.component;l(e,10,0,"Current: The amount that you are yet to receive for invoices that have not crossed the payment due date.\n                Overdue: The amount you are yet to receive for invoices that have crossed the due date.\n                ","Total Receivables section displays how much money your customers owe you","bottom");var u=l(e,24,0,n.barChartColors[4].backgroundColor);l(e,23,0,u),l(e,32,0,n.barChartData,n.barChartLabels,n.barChartOptions,n.barChartType,n.barChartColors,n.barChartLegend);var t=l(e,41,0,n.barChartColors[0].backgroundColor);l(e,40,0,t);var a=l(e,51,0,n.barChartColors[4].backgroundColor);l(e,50,0,a)},function(l,e){var n=e.component;l(e,1,0,void 0);var t=u["\u0275unv"](e,16,0,l(e,17,0,u["\u0275nov"](e,0),n.invoiceReport.total_receivable));l(e,16,0,t);var a=u["\u0275unv"](e,25,0,l(e,26,0,u["\u0275nov"](e,0),n.invoiceReport.overdue_receivable));l(e,25,0,a);var o=u["\u0275unv"](e,42,0,l(e,43,0,u["\u0275nov"](e,0),n.invoiceReport.current_receivable));l(e,42,0,o);var s=u["\u0275unv"](e,54,0,l(e,55,0,u["\u0275nov"](e,0),n.invoiceReport.overdue_receivable15));l(e,54,0,s);var i=u["\u0275unv"](e,61,0,l(e,62,0,u["\u0275nov"](e,0),n.invoiceReport.overdue_receivable30));l(e,61,0,i);var r=u["\u0275unv"](e,68,0,l(e,69,0,u["\u0275nov"](e,0),n.invoiceReport.overdue_receivable45));l(e,68,0,r);var c=u["\u0275unv"](e,75,0,l(e,76,0,u["\u0275nov"](e,0),n.invoiceReport.overdue_receivable_above45));l(e,75,0,c)})}function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-dashboard",[],null,null,null,v,p)),u["\u0275did"](1,114688,null,0,d,[c.a],null,null)],function(l,e){l(e,1,0)},null)}var g=u["\u0275ccf"]("app-dashboard",d,m,{},{},[]),h=n("zagk"),b=n("iInd");class y{}class f{}n.d(e,"DashboardModuleNgFactory",function(){return R});var R=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,a.o,o.a,g]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[u.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,c.a,c.a,[h.a]),u["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),u["\u0275mpd"](1073742336,i.m,i.m,[]),u["\u0275mpd"](1073742336,i.g,i.g,[]),u["\u0275mpd"](1073742336,i.O,i.O,[]),u["\u0275mpd"](1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),u["\u0275mpd"](1073742336,y,y,[]),u["\u0275mpd"](1073742336,f,f,[]),u["\u0275mpd"](1073742336,r.ChartsModule,r.ChartsModule,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,b.j,function(){return[[{path:"",component:d}]]},[])])})}}]);