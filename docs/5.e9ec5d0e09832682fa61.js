(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Gqir:function(t,e,r){"use strict";r.r(e);var n=r("Valr"),o=r("QJY3"),i=r("GzhN"),c=r("DUip"),a=r("mrSG"),l=function(){return function(t,e,r){this.name=t,this.mgPerMl=e,this.standardDose=r}}(),u=r("TYT/"),s=function(){function t(){}return t.prototype.getSpecialties=function(){return[new l("Clindamycine 125mg/5ml",25,15),new l("Clindamycine 250mg/5ml",50,20)]},t.\u0275prov=u.Ib({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}(),p=function(){function t(){}return t.prototype.compute=function(t,e,r,n){var o=this.round(e*r*(1/t),1);return[o,this.round(o/n,1)]},t.prototype.round=function(t,e){return Math.round(Math.pow(10,e)*t)/Math.pow(10,e)},t.\u0275prov=u.Ib({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}(),b=function(){function t(t){this.form=t}return t.prototype.ngOnInit=function(){this.updateAll(this.form.value),this.addChangeListener("weight"),this.addChangeListener("targetDose"),this.addChangeListener("intakes")},t.prototype.addChangeListener=function(t){var e=this;this.form.get(t).valueChanges.subscribe((function(r){var n=e.form.value;n[t]=r,e.updateAll(n)}))},t.\u0275fac=function(e){return new(e||t)(u.Mb(o.f))},t.\u0275dir=u.Hb({type:t}),t}();function f(t,e){if(1&t&&(u.Sb(0,"option",11),u.xc(1),u.Rb()),2&t){var r=e.$implicit;u.hc("ngValue",r),u.Ab(1),u.yc(r.name)}}function m(t,e){if(1&t&&(u.Sb(0,"div"),u.Sb(1,"p",12),u.xc(2),u.Nb(3,"br"),u.xc(4),u.Nb(5,"br"),u.xc(6),u.Rb(),u.Rb()),2&t){var r=u.cc();u.Ab(2),u.Bc(" ",r.form.controls.weight.value," kg \xd7 ",r.form.controls.targetDose.value," mg/kg/jour \xf7 ",r.form.controls.specialty.value.mgPerMl," mg/ml "),u.Ab(2),u.zc(" \u21d2 ",r.dailyMl," ml/jour "),u.Ab(2),u.Ac(" \u21d2 ",r.intakeMl," ml (",r.form.controls.intakes.value," fois par jour) ")}}function g(t,e){if(1&t&&(u.Sb(0,"div"),u.Sb(1,"p",10),u.xc(2),u.Nb(3,"br"),u.xc(4),u.Nb(5,"br"),u.xc(6),u.Rb(),u.Rb()),2&t){var r=u.cc();u.Ab(2),u.Bc(" ",r.form.controls.weight.value," kg \xd7 ",r.form.controls.targetDose.value," mg/kg/jour \xf7 ",r.form.controls.dosage.value," mg/ml "),u.Ab(2),u.zc(" \u21d2 ",r.dailyMl," ml/jour "),u.Ab(2),u.Ac(" \u21d2 ",r.intakeMl," ml (",r.form.controls.intakes.value," fois par jour) ")}}var d=[{path:"spec",component:function(t){function e(e,r,n){var o=t.call(this,e.group({specialty:"",weight:"",targetDose:"",intakes:3}))||this;return o.formBuilder=e,o.specialtyService=r,o.formulaService=n,o.specialties=r.getSpecialties(),o}return Object(a.b)(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this.form.get("specialty").valueChanges.subscribe((function(t){if(t){var r=e.form.value;r.specialty=t,r.targetDose=t.standardDose,e.form.get("targetDose").setValue(t.standardDose),e.updateAll(r)}}))},e.prototype.updateAll=function(t){var e;t&&(e=this.formulaService.compute(t.specialty.mgPerMl,t.weight,t.targetDose,t.intakes),this.dailyMl=e[0],this.intakeMl=e[1])},e.\u0275fac=function(t){return new(t||e)(u.Mb(o.c),u.Mb(s),u.Mb(p))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-specialty-dosage"]],features:[u.xb],decls:20,vars:3,consts:[["clrForm","","clrLayout","compact",3,"formGroup"],["for","specialty"],["clrSelect","","id","specialty","formControlName","specialty"],[3,"ngValue",4,"ngFor","ngForOf"],["for","weight"],["clrInput","","type","number","formControlName","weight"],["for","targetDose"],["clrInput","","type","number","formControlName","targetDose"],["for","intakes"],["clrInput","","type","number","formControlName","intakes","min","1","max","9"],[4,"ngIf"],[3,"ngValue"],[1,"result"]],template:function(t,e){1&t&&(u.Sb(0,"div"),u.Sb(1,"form",0),u.Sb(2,"clr-select-container"),u.Sb(3,"label",1),u.xc(4,"Sp\xe9cialit\xe9"),u.Rb(),u.Sb(5,"select",2),u.vc(6,f,2,2,"option",3),u.Rb(),u.Rb(),u.Sb(7,"clr-input-container"),u.Sb(8,"label",4),u.xc(9,"Poids [kg]"),u.Rb(),u.Nb(10,"input",5),u.Rb(),u.Sb(11,"clr-input-container"),u.Sb(12,"label",6),u.xc(13,"Dose journali\xe8re prescrite par kilogramme [mg/kg/jour]"),u.Rb(),u.Nb(14,"input",7),u.Rb(),u.Sb(15,"clr-input-container"),u.Sb(16,"label",8),u.xc(17,"Prises par jour"),u.Rb(),u.Nb(18,"input",9),u.Rb(),u.Rb(),u.Rb(),u.vc(19,m,7,6,"div",10)),2&t&&(u.Ab(1),u.hc("formGroup",e.form),u.Ab(5),u.hc("ngForOf",e.specialties),u.Ab(13),u.hc("ngIf",e.dailyMl>0))},directives:[o.w,o.l,i.b,i.g,o.g,i.k,i.f,o.t,i.j,o.k,o.e,n.l,i.e,o.q,o.b,i.d,n.m,o.p,o.v],styles:[".result[_ngcontent-%COMP%]{font-weight:700}"]}),e}(b)},{path:"conc",component:function(t){function e(e,r){var n=t.call(this,e.group({dosage:"",weight:"",targetDose:"",intakes:3}))||this;return n.formBuilder=e,n.formulaService=r,n}return Object(a.b)(e,t),e.prototype.ngOnInit=function(){t.prototype.ngOnInit.call(this),this.addChangeListener("dosage")},e.prototype.updateAll=function(t){var e;t&&(e=this.formulaService.compute(t.dosage,t.weight,t.targetDose,t.intakes),this.dailyMl=e[0],this.intakeMl=e[1])},e.\u0275fac=function(t){return new(t||e)(u.Mb(o.c),u.Mb(p))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-concentration-dosage"]],features:[u.xb],decls:19,vars:2,consts:[["clrForm","","clrLayout","compact",3,"formGroup"],["for","dosage"],["clrInput","","type","number","formControlName","dosage"],["for","weight"],["clrInput","","type","number","formControlName","weight"],["for","targetDose"],["clrInput","","type","number","formControlName","targetDose"],["for","intakes"],["clrInput","","type","number","formControlName","intakes","min","1","max","9"],[4,"ngIf"],[1,"result"]],template:function(t,e){1&t&&(u.Sb(0,"div"),u.Sb(1,"form",0),u.Sb(2,"clr-input-container"),u.Sb(3,"label",1),u.xc(4,"Concentration [mg/ml]"),u.Rb(),u.Nb(5,"input",2),u.Rb(),u.Sb(6,"clr-input-container"),u.Sb(7,"label",3),u.xc(8,"Poids [kg]"),u.Rb(),u.Nb(9,"input",4),u.Rb(),u.Sb(10,"clr-input-container"),u.Sb(11,"label",5),u.xc(12,"Dose journali\xe8re prescrite par kilogramme [mg/kg/jour]"),u.Rb(),u.Nb(13,"input",6),u.Rb(),u.Sb(14,"clr-input-container"),u.Sb(15,"label",7),u.xc(16,"Prises par jour"),u.Rb(),u.Nb(17,"input",8),u.Rb(),u.Rb(),u.Rb(),u.vc(18,g,7,6,"div",9)),2&t&&(u.Ab(1),u.hc("formGroup",e.form),u.Ab(17),u.hc("ngIf",e.dailyMl>0))},directives:[o.w,o.l,i.b,i.g,o.g,i.e,i.f,o.q,o.b,i.d,o.k,o.e,n.m],styles:[".result[_ngcontent-%COMP%]{font-weight:700}"]}),e}(b)},{path:"",redirectTo:"conc"}],h=function(){function t(){}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[c.c.forChild(d)],c.c]}),t}();r.d(e,"FormuliModule",(function(){return v}));var v=function(){function t(){}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[n.c,h,o.s,i.a]]}),t}()}}]);