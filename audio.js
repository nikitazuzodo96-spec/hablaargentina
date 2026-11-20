// Озвучка фраз курсов голосом Томаса (es-AR). Файлы: audio/<id>.mp3.
// id = djb2(чистый текст) — тот же ключ, что в приложении (app/src/lib/audioKey.ts, app/scripts/list-phrases.js).
// Собирается в audio.js командой: node build-audio.js (подставляет список id).
(function () {
  var IDS = new Set("100il2v 104bjz4 104r6yr 105nbve 108sbxx 108sq2s 10a8gjs 10blfv2 10jhuut 10jv5bm 10jwb22 10mdu6w 10nhcr9 10pswqo 10q1cuq 10s2h1k 10si0jo 10vsl15 110zx30 111qxv0 113uqqr 11cp7lv 11ep7hq 11l5pj6 11mce3q 11ngbgp 11o00zc 11o2ntq 11pcuzm 11ptv5l 11quuuq 11skhx0 11taie6 11zmuow 121xewp 123s0ai 1278j3d 127nz1j 1286tkf 128vlqq 12awfx8 12ccbs0 12dr9kp 12jwwgy 12lby37 12mkwmd 12qq3dw 12qqnjn 12tpkjp 12v05za 12vz9zn 131d0cj 136116y 136skjp 13705oj 13aoi5g 13epxke 13qaulz 13vcpb4 141xjal 143ca6b 143mux2 1454ld3 145ycoh 149h4k2 14aoc7o 14b6oc5 14glfvq 14lr61l 14nox9f 14pelx0 14ps8gp 14unudm 152p4ca 1538isx 154a8h7 154kh09 156xbc3 157k45j 157mj07 159ijc4 159rx4r 15adtxc 15cq20a 15dfqzo 15fjln3 15fo2v4 15g0vct 15h5khg 15huynn 15p70u3 15poez2 15qnbv0 15rleaf 15rpivn 15slulj 15t452x 15tnwuf 15z8k3c 161mqxe 161t2n7 168sov 16ar97 16bpbmx 16cpduw 16dvzzz 16jqoji 16llryd 16q347k 16r5qku 16tzrf2 16u7b99 16ufiiq 16vkely 16w0m1q 170yvpw 171mwm7 172dj04 172ipj1 172j3r9 17aose7 17eeapk 17ivta5 17kbw98 17lf7u9 17li4l6 17pqrjt 17q4c4h 17q4vml 17t2uag 17wqwhy 17xp54k 17xy530 182a8xf 182iqg0 182p4oq 1846kxl 186vz9o 1876tnq 1877ank 187fplp 187nymt 1885wjq 18a0jz9 18b9a44 18e474w 18nsnsc 18o8qkj 18q5x9p 18s570p 18v419z 18vp0yo 18w3tq6 18x452m 18yfp4c 18zz7s5 193du9d 195mlh7 197b18h 1985sna 1987vba 19atrcl 19bt9yt 19ch1dq 19ec1j1 19f6o93 19g38yg 19ini49 19jrlx8 19l73vn 19l80ir 19pt4bt 19rpckh 19ugeue 19y2fk4 19zfnfb 1a1y23a 1a3wk7a 1a4fwex 1a8rl3d 1ad9736 1ae2tf1 1aewudr 1ah2lcr 1ahrs3 1am3zu2 1ao5te6 1ap9f7g 1apc0vw 1ar40qn 1aunoha 1ax0ibu 1b00df1 1b1f7i 1b2ymrx 1b3gk2v 1b47gvv 1b48fmi 1bbrlim 1bd22wn 1bd94p4 1be23tv 1bf0xau 1bfw8i6 1bhlvqo 1big8u7 1bkszm0 1blpnr6 1bmdby1 1bnaq5o 1bqg9ae 1bu8b08 1bvpat8 1c1icm1 1c1vrck 1c1w5ph 1c24gwe 1c27qpa 1c4djj2 1c5p1ie 1c85wnr 1cb8mec 1ceg6qy 1cewv9n 1cf942d 1cjxlyh 1clkabh 1ctd6tc 1cwxvvb 1d48qrg 1d65fs 1d8gh1r 1da4f8r 1dbdv0w 1dduj0a 1dgvqy6 1dhieeb 1dje2li 1dljcxt 1dlzjy7 1dnh1dh 1donzqw 1dsg2ra 1dxa923 1dxgpln 1dznkcs 1dzz69s 1e1a6na 1e2aklc 1e581by 1e6kudc 1e72j87 1e8xcy8 1ea8hg8 1ebtiq5 1efq39k 1ejr62b 1el9spd 1elmdmg 1erv50j 1esontp 1etukhj 1f2y9fk 1f42md1 1f5dpli 1f5tqi1 1f8kib0 1fbunrt 1fc9rsg 1fcqife 1fikqxk 1fqfle8 1frbepy 1frsu82 1fte8u9 1fuvldc 1fwwtg1 1fzyun1 1g0znqh 1g15in8 1g1mow0 1g2bcjj 1g4aazm 1g874ep 1g9dnp2 1g9le32 1gb0np5 1gd8qg 1geke3p 1glzmf0 1gmo6lq 1gon66s 1grfz1b 1grlsvx 1gubxtx 1gykkmb 1gyqya0 1gyt3hw 1h0j0n2 1h1s265 1h3dyjb 1h7f7bn 1h9gmxt 1haru8c 1hccu17 1hfbbjk 1hfs54l 1hh6hoz 1hhenlc 1hivccj 1hob5uj 1hopame 1hqs0ak 1ht3ue6 1htlejg 1hts55k 1hx25ej 1hywozi 1hz1uh7 1i37ka9 1i3n3fm 1i7a26p 1i7phk0 1i8nim2 1i8njwa 1i90uxb 1i9q8c1 1ib0td7 1ib43dj 1igpt2a 1ihx7op 1iizseo 1io0whz 1isgyb0 1ittnzg 1ivwpdl 1iz7a42 1j0gse6 1j40rxk 1j8us78 1ja150y 1jca9h6 1jcid8d 1jcj3vt 1jh5qif 1jhhoro 1jibe3o 1jm4ppe 1joiqfv 1jokbvs 1jou8lp 1jrbkds 1jrcd9e 1jrnd9g 1jrzaqr 1jt4cvu 1ju7nkb 1jvmfpf 1jvqy9t 1jvw8wn 1jx3kr7 1jy824q 1jylb69 1k0eukp 1k1czcp 1k1pm6y 1k41vjp 1k65xsj 1k6lqfg 1kbf7tm 1kehnjt 1kk6o1k 1kn7b2n 1knukq2 1koe0z3 1kps6fe 1kuyrrp 1lcy032 1lfke6a 1lfnd94 1lfqpqi 1lfvfv5 1lh04p1 1lhc6by 1li7h6c 1ljcorr 1ll14y0 1lrjsis 1lzkohd 1m04nbp 1m8sdcp 1mbciqv 1mbvqoz 1mchlek 1mh4zr7 1mhi185 1miqgq6 1mki3iz 1mm5nwt 1modw9z 1mq7adz 1mt6xcg 1muhpun 1mxt8du 1n0w32l 1n2bh9r 1n7v3tv 1nd36jd 1ndn7lw 1ndntjf 1nfjhib 1nie3tt 1nih8b8 1nop0z8 1nou6qf 1noz325 1npv33b 1nqwo6l 1nqwvgt 1nsgnyk 1ntx0ch 1nufmuv 1o18qm3 1o1hiyz 1o211yd 1o2mfme 1o4w4t 1o5aiuy 1o6n05q 1od9pld 1odz6p7 1oeq91r 1ofkwf0 1ofl3tq 1oi6puj 1om675w 1omov50 1os9ktl 1osnd0t 1ovk8u4 1p2ezww 1p2ezxa 1p2xvxm 1p303d8 1p435t4 1p81stb 1pe4127 1pgoqv0 1pi874j 1pibj6r 1pj46ri 1pk07em 1pkonfz 1pmnrzi 1ppkbm 1pqaevj 1pqfwa8 1pt1sp7 1pu2awp 1puvz40 1pw3x43 1pzz2g8 1q020ug 1q04r4y 1q2hhgk 1q6q41x 1q7g60 1qk5ine 1qlegk0 1qq0va7 1qr81nl 1qt8p4h 1qvqlsr 1qxebvi 1qyq864 1r17zpy 1r7w1cf 1r938ag 1rafiby 1rat6bc 1rbvkm6 1rd7zun 1rk0fbw 1rv4ndz 1rvxe6u 1rw5sgi 1rw5sgs 1rynq1w 1ryzoj6 1s1qczp 1s2bfzx 1s8y8j8 1sa122x 1sdgac9 1sil7pe 1sjhg49 1sk4eje 1sl22o0 1sl27lk 1smg7i1 1sni1pi 1sobk3j 1soe9r6 1ssphpp 1starla 1stixxg 1stvhmx 1sv0gcb 1syncq3 1t15jav 1t82667 1t9kwze 1tc8gus 1thcr7 1tkvb4b 1tnt9my 1ts3n3z 1tt8cm 1tv888c 1twgkz3 1tx3bll 1tzproy 1u1i81g 1uez0ke 1ugdhin 1uirto7 1ujqrkn 1umhtaf 1upsrgc 1upy8r9 1ut0dyc 1utfnef 1utfx9a 1utgfzy 1uvo6q2 1uzf12o 1uzfcu3 1uzhc6k 1uzmhwr 1uznedg 1uznuoe 1uzv7bm 1uzz1zm 1v0zrie 1v4c834 1v583ro 1v9dk6m 1v9lj09 1vak3xj 1vc9p0v 1vfblvy 1vjbwpn 1vk90t0 1vm8pk0 1vmby54 1vqtnu0 1vr3ghm 1vrlsbw 1vtlvd8 1vubxe0 1vve6aa 1vvmh73 1vzujl3 1w5m87e 1w5vjuw 1w65n0g 1w88tqr 1w9p2aq 1wh302i 1wh353o 1whcrlf 1wiux7t 1wj3wx1 1wjb5xz 1wjbysg 1wk7slk 1wmp5dh 1wn29ia 1wpydpd 1wt60pz 1wv2xcu 1x3st3i 1x8ukmw 1xddyaw 1xdeyoj 1xh56ux 1xhr70p 1xipb6g 1xjv2vw 1xkdhfg 1xko9mu 1xlk9t5 1xmgom1 1xmzi3q 1xnl8dk 1xo0ozd 1xok9oy 1xq8b5y 1xxgo6v 1xz8u7h 1xz9r8l 1xzty21 1y2yun8 1y53u0c 1y6nfiy 1y6yo94 1y7iqx8 1y8tush 1y9d4io 1ycbc0f 1yh3h9k 1yiidt3 1yjtcep 1yoiotg 1yqc4m9 1yu1rkm 1yuc2f 1ywhg2p 1ywlbff 1ywzf3t 1yz1hbp 1yz5j7i 1yz9ldl 1yza681 1yzas29 1yzik6y 1z0tc0g 21hje4 21tdvu 23a5v0 23wrw7 26l5w2 2awik7 2fbrc9 2gpf0k 2j5ecx 2jkuzs 2lxl9j 2pppy4 2pu1ed 2qobok 2riqqw 2t5ht4 2u7iiw 2ue6bc 2vqoxs 2wii1j 2x9ob3 2xcgr7 2xglgm 2zfese 2zfh6q 2zfhel 2zudjm 310j4d 314w1s 327lkz 33nwpb 33qwow 33sm15 3426mz 34z9au 355rnn 358h5j 375bsi 375jps 375l1n 375rcl 375ygh 37651i 3765cx 3765xl 3767vh 3768ct 376exz 376fjl 376hhx 376jlx 376jm7 376nkr 376o7u 37wu0c 386jcf 38iqte 38iz0g 3eman9 3en3tp 3enhld 3eys1l 3f8tlb 3fa4ci 3ft1uz 3ft3is 3g7qcn 3gah18 3hm8zb 3hmis 3hmwt 3hna6 3hnac 3hniz 3hnj3 3hnnc 3hno3 3htqba 3hylhy 3hypo5 3ievxv 3iew2i 3ig7oz 3ihyr7 3ihyxq 3inh65 3ioeob 3iof3q 3iq57h 3jv1f8 3kfxku 3kiuu8 3ky8g2 3ky8g8 3lotio 3lovb9 3lwqex 3lwtdy 3lxkih 3lxni2 3lxt36 3m9vxg 3ncfem 3ncldd 3npmw 3ok81r 3p7mrc 3pzglu 3pzr64 3q6f5f 3q91qd 3q9ilf 3q9iql 3q9iuo 3qc83b 3qcj16 3qggas 3qu5gn 3r9gyd 3r9k8w 3rvf15 3tcwcw 3tsaci 3tsits 3tyibv 3u7q5l 3u8c0v 3uhe8t 3ujc9h 3uttid 3uzpmb 3v6xl4 3w1g0e 3y56ks 41yg36 42jwzr 44by6k 473v3h 4ea5j8 4enp5d 4euvhx 4fqlfa 4g7hpg 4gvi8p 4idfjs 4lnbxv 4qju2i 4qpcqw 4rj2t8 4s3dhw 4vbejz 4xgci4 4zt590 57h3t6 57z2yk 5cmh9f 5gitpo 5gsjse 5hxazq 5kaa9q 5quref 5qx30h 5s1f1x 5weli1 5yziv5 5z1qo9 5zdc9b 60f5g8 62ygm8 68sicz 6b5k4u 6bhzwb 6fxao0 6m6nmb 6mjnga 6rdwei 6rrycj 6rt4u2 6rxtsz 6ucsad 6yhe2o 71kwhg 71kwkw 73bfzn 75fkmc 77x9ty 7aqesh 7b46pm 7f604e 7hv0zo 7le4h8 7lyx7a 7p0mzc 7pfwuf 7rn39b 7tkxsa 7ue0n3 7x85qv 7xuht7 7zajpt 7ze0fo 80gb1h 83c47g 867pw2 8a1ddo 8anq82 8dq769 8dr3b8 8hsse5 8hwimw 8icj2z 8jl31i 8kibaw 8kuwgi 8ljgmr 8mhlor 8n3acy 8p4w6p 8r536c 8rjcb4 8saf14 8tmm11 8tyesx 8v9fei 8wcbfa 8x742l 8xebbz 8xfp5d 8xpa2f 8ycki1 8ysmcq 907rbt 91cdv6 94bm3a 97diuu 9a5dk3 9aatqq 9atw1k 9b2s7 9cg67x 9d95sc 9e2qv5 9ejgjf 9gpsmp 9jwm3x 9mpr9v 9pbzdv 9pjyuv 9sdgoh 9xvewj 9ya3jg 9yz3ie a004f4 a1z5rt a875f6 aaikv0 ac6z5p ag0bqn ah83jr ai9wlq aootmn aq88zt au58ha auweif b1eip7 b5r9ek b88fi5 bbew6m bbpvbn bk4csy bnmsdz bnns3u bobpis boz84e bpa3zi bqdzdc bqq18u bvry1a bzrtp7 c1nc3c c82mpz cacf3x ce2esl chk2j1 cl4joj cpmwrl crqqvz csiiip cxurft d0l2ez d2nzwo d3qo1p d3w2p d7s9uh dcupge dep5bb df8yt3 dfdxj7 dg26hy dgt19p dgvhli dh1wsa dio2l9 djw19w dovbz3 dp5h4s dqir8h dt34gf dtyw34 dzh3c0 e2w5uo e3yuda e5bdoi ec2rpw edps4t eedwn7 egfrig elj6ym esjtto etjz62 ey2tvg f0tr2r f357tm f66of9 f7k6t9 f9e48l fo79zb fomwy3 fuzek1 fv79gs fvrj60 g53i9r g7uoyx g84hy6 g85ypx g9ajpl gb77ox gbndhi ge633a gfjyot gftv8v gieemf gkdbo2 gl6e3d gm24r0 gmfo7o gnczo2 gt1uw1 gvx5cc h0gdcn h30m49 hazqvh hbdwds hbuj0z hc62oh hhgisz hhmiea hix31j hjaun1 hjb0yh hr67id ht8iq4 i04qft i2cknd i2s0ql i3w57e i75bxg i77s9 i7qmb2 iaqdq iele62 ig9s5i igvctl il6u1z ix88p1 izp3y9 j3hlju j8pqig jdei1x jf3d0u jh0saz jh2d3l joso6w jow4x0 jqe0i4 jvvrxo jw5hpw k1wx25 k4ffwu k86l02 k9256y kby3jo kby3ju kcg3p3 kd68x5 kg23yi kgmv43 kkhi0c kl6zf5 kl9qgx kn1chi kpok1l krs92s ksoejc ksp2mm ky7nhn l0cmql l8773h l8zzui lb3blr lbfdil lbfkrs lbvc11 lfcfv5 lgiycf lkzz8x llogac llt2dv ln9wxd lnh78e lo7gjs lofmbv lxnf2q lzeadr m04d5t m0z07x m2usp4 m57lwg m8h99k mcgge0 meagnv mebj2o mj94lw mjqcxc mlvy79 mm3juu mmdgpx mruqg6 msr3fs mtg8ku mwbb3n my0z1f mz2gkr n0aoy5 n0lqr n32jz1 n36hig n59a2 n7fbby n7vicj nct31g nh9ufn nj7zz1 njdxec njgvdm nkrbf nmuwtd nn6q6u no4jk4 nrofyk nt0dpf nu2zpl nu874m nyi8tw o9kpsl ob8jj oe70r ogoxdb oh2e4u olhin7 orfdjh ouxrdc owaqo p4uldl p6rym4 p8zbjr p938ew pfd8lq pfne5n pjfhog pju3xa pjvwqb pn3o9x pnj4gv ptz54 pw4uln pylcip q3u8oe q4zcqm q5tpz3 q68ia5 q81sok q895f5 qccqbt qeicvu qfzeax qhshwm qil2oq qjh6dk qw7jrp r3ck5v r78qe6 r7ni19 rb91wu rbd5mz rbu7m9 rh9g0m rjp1lp rkkrud rxerjg ryt3d7 s8w4of satswf sb9xlc sbs4x9 scmbja sdi2pg seicx2 sf08tr sir8wj sk6ot1 skgz7i sngxbx svxwd4 t0bfga t0q82l t11b0u t2c90 t51e4f t8pvem t9zm0c thl00g tl17yw tmjzau tmlbue tmslw tmwjpr tnrro6 tqla9s tub4gq ty3ymp tyn1z0 u2x0bw u4d6gf u702n6 u7bnqu u9hp86 u9rki6 ug78fa unoelb uqw0p6 utte4j uuwvts v1eac9 v4lq0m v5qjqv v7cho7 v8ettc v93uh2 vcyt4 vgi1cd vhw6v8 vl4x7l vm7m05 vmmawm vmtc95 vqzs6i w253c5 w4s8km w6dhnx w6uoeo wanicf wb8oat wccd7s wcxzm8 we2mj9 we5x0v wg25ny wja4z4 wly0qp wntrlt wntx12 wo6s3w wp6lwr ws0l6q wt0g61 wtjzb7 wtxlgt wxqn2c wz22lm x1g4v1 x2l1cw x6ouke x7jew0 xcqflm xdg2wf xfggee xg30pq xjflpg xmygsu xsto64 xuypxa xvbn8v xw6wy7 xyjktd y08kr3 y6fq9l y7bmoj y7gsr4 ya3qcb yebkp8 yg0u54 yirwxl yivlga yiw24q yiyd3n yj2fnz yjit51 yjitub yjj887 yjkqtk yjkquh yjkxcn yjl5e0 yjls0a yjmdib yjmjut yjn57i yjn7yg yjnexw yjnfsq yjpd3w yjq3tu yjq632 yjqy10 yjqzmj yjsb8a yjstaq yjtugf yjvsor yjwsug yjwsut yjx201 yjyttp yjz34c yjzgtl yjziho yk01b7 yk04px yke2zn ylbeng yli47h ynax4d ypg0uz ypxebs yrluws yttfyt ywuc96 yww4t6 yyiwx1 z14n3z z8blzq zox7ws zp7rvs zroya7 zsbuys zt169q ztemov zu6wwh zwlxw9 zxom1f zy4ogf".split(" "));
  // Папка audio/ лежит рядом с самим audio.js — так работает и из подпапок.
  var BASE = (document.currentScript && document.currentScript.src) ? new URL(".", document.currentScript.src).href : "";
  function clean(t) {
    return String(t).replace(/…|\.\.\./g, "").replace(/\(.*?\)/g, "").replace(/\s*\/\s*/g, ", ").replace(/\s+/g, " ").trim();
  }
  function key(t) {
    var h = 5381;
    for (var ch of clean(t)) h = ((h * 33) ^ ch.codePointAt(0)) >>> 0;
    return h.toString(36);
  }
  var audio = new Audio();
  audio.preload = "auto";
  var last = { text: "", at: 0 };
  var voice = null;
  function pickVoice() {
    if (voice || !window.speechSynthesis) return voice;
    var vs = speechSynthesis.getVoices();
    var pref = ["es-AR", "es-419", "es-US", "es-MX", "es"];
    for (var i = 0; i < pref.length && !voice; i++)
      voice = vs.find(function (v) { return v.lang.replace("_", "-").toLowerCase().indexOf(pref[i].toLowerCase()) === 0; }) || null;
    return voice;
  }
  // Повторное нажатие на ту же фразу в течение 4 с — медленно.
  function say(text, slow) {
    var now = Date.now();
    if (slow === undefined) slow = last.text === text && now - last.at < 4000 && !last.slow;
    last = { text: text, at: now, slow: slow };
    try { audio.pause(); } catch (e) {}
    if (window.speechSynthesis) speechSynthesis.cancel();
    var id = key(text);
    if (IDS.has(id)) {
      audio.src = BASE + "audio/" + id + ".mp3";
      audio.playbackRate = slow ? 0.7 : 1;
      audio.preservesPitch = true;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
      return;
    }
    if (!window.speechSynthesis) return;
    var u = new SpeechSynthesisUtterance(clean(text));
    var v = pickVoice();
    u.lang = v ? v.lang : "es-AR";
    if (v) u.voice = v;
    u.rate = slow ? 0.6 : 0.92;
    speechSynthesis.speak(u);
  }
  // Кнопка 🔊 для React-страниц: haSpeaker(text, {size, light})
  function speaker(text, opts) {
    opts = opts || {};
    var size = opts.size || 34;
    return React.createElement("button", {
      type: "button",
      title: "Послушать (нажми ещё раз — медленно)",
      "aria-label": "Послушать",
      onClick: function (e) { e.stopPropagation(); say(text); },
      style: {
        flexShrink: 0, width: size, height: size, borderRadius: "50%", border: "none", cursor: "pointer",
        background: opts.light ? "rgba(255,255,255,.18)" : "#EAF3FB", color: opts.light ? "#fff" : "#4A86BD",
        display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0,
        verticalAlign: "middle", marginLeft: opts.inline ? 6 : 0
      }
    }, React.createElement("svg", { width: size * 0.5, height: size * 0.5, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" },
      React.createElement("path", { d: "M11 5 6 9H2v6h4l5 4V5z", fill: "currentColor" }),
      React.createElement("path", { d: "M15.5 8.5a5 5 0 0 1 0 7" }),
      React.createElement("path", { d: "M19 5a10 10 0 0 1 0 14" })));
  }
  if (window.speechSynthesis) speechSynthesis.onvoiceschanged = pickVoice;
  window.haSay = say;
  window.haSpeaker = speaker;
  window.haHasAudio = function (t) { return IDS.has(key(t)); };
})();
