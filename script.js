/* ============================================================
   都道府県データ（47件、北海道→沖縄の正式順）
   title / keyword / message はnote原文にもとづいています。
   原記事に本文が無かった6県（茨城・群馬・千葉・富山・石川・福井）は
   捏造せず、プレースホルダーのままにしてあります。
   画像も同様に、原記事にアップロードされていた都道府県のみ
   実URLを設定しています。あとから差し替えてください。
   ============================================================ */
const prefectures = [
{ id:1, prefecture:"北海道", region:"北海道", title:"開拓と余白",
  scene:"大雪山が金の円を背負って立っている。逆三角形の中に広大な原野と川筋。雪の結晶が静かに中心に置かれている。",
  keyword:"可能性", message:"まだ埋まっていない余白が多い。それは弱さではなく、まだ何かが始まる前の状態を示している。",
  image:"1778566973-x5TBUNGcPFkSDiR6sfCJdteW.png" },

{ id:2, prefecture:"青森", region:"東北", title:"信仰と祝祭",
  scene:"岩木山の端正な稜線。ねぶた祭りの灯りが逆三角形の中で揺れている。左の鳥居と右の林檎が、神聖と豊穣を同時に語る。",
  keyword:"継承", message:"縄文から続く土地の記憶が、祭りという形で毎年更新される。",
  image:"1778567370-Qf9FZmjI8w31JEO6ecAi2qn7.png" },

{ id:3, prefecture:"岩手", region:"東北", title:"静謐と技術",
  scene:"三陸の岩礁が逆三角形に広がる。南部鉄器の急須がその中心に置かれている。鉄と海という異質な組み合わせが岩手の振り幅を示す。",
  keyword:"精度", message:"手間を惜しまない。それが鉄器にも、詩にも現れる。",
  image:"1778567419-yfL5HVIw8caBqFprJGhADs17.png" },

{ id:4, prefecture:"宮城", region:"東北", title:"景勝と風雅",
  scene:"松島の島々が逆三角形に点在している。七夕飾りが夜の水面に映る。竹と菊の静かな左右対称。",
  keyword:"調和", message:"自然の造形と人の祈りが同じ画面に収まっている。",
  image:"1778567470-gQWCEtR0IdK6Bbs4exVuZmDk.png" },

{ id:5, prefecture:"秋田", region:"東北", title:"深さと豊穣",
  scene:"田沢湖の水深は423メートル。日本一深い湖が逆三角形に沈んでいる。竿燈まつりの提灯が縦に連なる。杉と稲穂の両立。",
  keyword:"蓄積", message:"見えないところに深さがある。",
  image:"1778567527-xP5ohvcFWOL7X81tTJwVrAej.png" },

{ id:6, prefecture:"山形", region:"東北", title:"流れと祝い",
  scene:"最上川が逆三角形を貫いて流れる。花笠が中心で円を描く。桜と葡萄、春と秋が並立している。",
  keyword:"移ろい", message:"川は止まらない。祭りも毎年来る。",
  image:"1778567597-C7BZvw1iGLRkhcTn2XSqAOQ3.png" },

{ id:7, prefecture:"福島", region:"東北", title:"鏡と再生",
  scene:"猪苗代湖の水面が空を映している。漆器の椀が右上で静かに光る。磐梯山の横広な山容が金の円を受け止める。",
  keyword:"反射", message:"傷ついた土地が、それでも光を映し返す。",
  image:"1778567676-dlqcG2o3BeIp1s4VRaMH5hjJ.png" },

{ id:8, prefecture:"茨城", region:"関東", title:"双峰と滝",
  scene:"筑波山の二つの峰が金の円を背に立つ。偕楽園の梅が枝を伸ばし、その下の逆三角形には袋田の滝が幾重にも流れ落ちる。",
  keyword:"重なり", message:"ひとつに見えるものにも、いくつもの峰と流れがある。違いを抱えたまま、一つの景色になる。",
  image:"images/08_ibaraki.jpg", phantom:true },

{ id:9, prefecture:"栃木", region:"関東", title:"滝と聖域",
  scene:"華厳の滝が逆三角形の中心を垂直に落ちている。日光東照宮の装飾紋様が水底に沈む。紅葉と苺という、渋さと可愛さの同居。",
  keyword:"権威と自然の共存", message:"人が神を祀った場所に、水が落ち続けている。",
  image:"1778567714-PZqXV45F9LfgWeAwiu0D3bHU.png" },

{ id:10, prefecture:"群馬", region:"関東", title:"三山と湯",
  scene:"赤城・榛名・妙義の上毛三山が金の円を背に連なる。桑と繭、その下の逆三角形には草津温泉の湯畑から白い湯気が立ち上る。",
  keyword:"内熱", message:"静かな山の下にも、地面の奥にも、目には見えない熱が流れ続けている。",
  image:"images/10_gunma.jpg", phantom:true },

{ id:11, prefecture:"埼玉", region:"関東", title:"祭りの夜",
  scene:"武甲山は石灰岩で削られた独特の山容をしている。秩父夜祭の提灯が逆三角形に満ちている。あの祭りの密度は、内陸の県が持つ熱量の証明だ。",
  keyword:"内側の熱", message:"派手に見えないが、夜になると火が灯る。",
  image:"1778567760-9ENp8VjM5xaustSv7UDlX6Qn.png" },

{ id:12, prefecture:"千葉", region:"関東", title:"海と石",
  scene:"太平洋から金の円が昇り、犬吠埼の灯台が海を見つめる。菜の花と落花生、その下の逆三角形には鋸山の岩壁と大仏が浮かぶ。",
  keyword:"展望", message:"海の向こうを見ることと、自分の足元を見つめること。その両方が、新しい景色を開いていく。",
  image:"images/12_chiba.jpg", phantom:true },

{ id:13, prefecture:"東京", region:"関東", title:"塔と門",
  scene:"山がない。その代わりにスカイツリーが金の円を突き抜けた。人工物が自然物の役割を担う、それが東京だ。逆三角形に夜景の密度が圧縮されて、底に雷門が鎮座する。",
  keyword:"集積", message:"あらゆるものが集まり続ける場所。",
  image:"1778582978-noc9JWjrhFfbmK5MC8IYBLD3.png" },

{ id:14, prefecture:"神奈川", region:"関東", title:"波と仏",
  scene:"富士山が神奈川から見える。静岡からとは違う角度で、少し遠く、少し低い。同じ山なのに見え方が変わる。それが神奈川という場所だ。大波と大仏が逆三角形に同居している。荒々しさと静けさ。",
  keyword:"対比の中の均衡", message:"荒々しさと静けさが、同じ場所に同居している。",
  image:"1778582910-EgtT2hRLjHu1JxqCDrd7nmkS.png" },

{ id:15, prefecture:"新潟", region:"中部", title:"米と太鼓",
  scene:"日本海側最大の県。チューリップと稲穂が並ぶ。春と秋、花と食が同じ画面に収まる。佐渡の太鼓が逆三角形の底に置かれている。鬼太鼓。",
  keyword:"豊かさの重さ", message:"これだけ実れば、それなりの覚悟がいる。",
  image:"1778583081-CK4kRWwMueUGla0Yxv9TpB3f.png" },

{ id:16, prefecture:"富山", region:"中部", title:"雪峰と峡谷",
  scene:"雪を抱いた立山連峰が金の円を背に連なる。雷鳥とチューリップ、その下の逆三角形には黒部峡谷と小さな鉄道が走る。",
  keyword:"深度", message:"高く登るほど、谷は深くなる。見える高さと見えない深さは、いつも同時に存在している。",
  image:"images/16_toyama.jpg", phantom:true },

{ id:17, prefecture:"石川", region:"中部", title:"庭と海",
  scene:"兼六園の徽軫灯籠と松が、金の円を背に静かに立つ。逆三角形には能登の海と白米千枚田。金箔の光が、水と田を細く縁取っている。",
  keyword:"洗練", message:"自然を整え、手を加え、それでも自然の美しさを失わない。",
  image:"images/17_ishikawa.jpg", phantom:true },

{ id:18, prefecture:"福井", region:"中部", title:"断崖と太古",
  scene:"東尋坊の岩壁に日本海の波が打ち寄せる。越前水仙が潮風に揺れ、その下の地層には恐竜の化石が眠っている。",
  keyword:"発掘", message:"失われたものは、消えたのではなく、まだ深いところに埋まっているのかもしれない。",
  image:"images/18_fukui.jpg", phantom:true },

{ id:19, prefecture:"山梨", region:"中部", title:"鏡の富士",
  scene:"富士五湖が富士山を映している。山と水鏡。信玄の軍配が底に沈む。葡萄と桃という、日本屈指の果物産地。",
  keyword:"反映", message:"山があるから湖が生まれ、湖があるから山が映る。",
  image:"1778583220-xbc1u5C6MgPXif82kSyeVsZ4.png" },

{ id:20, prefecture:"長野", region:"中部", title:"アルプスの重力",
  scene:"北アルプスが逆三角形に奥へ奥へと続いている。善光寺の燈籠が底に立つ。りんごと蕎麦の花。",
  keyword:"高さへの意志", message:"3000メートル級が連なる県に住むということは、日常的に高さを意識することだ。",
  image:"1778583358-e3Nui4WBR0gn1JF5Qw76SUfA.png" },

{ id:21, prefecture:"岐阜", region:"中部", title:"火と紙",
  scene:"長良川の鵜飼い。松明が水面に揺れて、鵜が魚を追う。あれは漁ではなく儀式に近い。和紙と鵜。",
  keyword:"技の継承", message:"炎と手仕事が同じ画面に収まっている。",
  image:"1778583411-e4Q1iO95qX0HbRSDgaVdyTL2.png" },

{ id:22, prefecture:"静岡", region:"中部", title:"富士の正面",
  scene:"富士山を正面から見る県。これ以上言うことはない。お茶とみかん、茶の渋さと柑橘の甘さ。三保の松原が逆三角形の底で広がっている。",
  keyword:"正対", message:"正面から向き合うことを恐れない土地。",
  image:"1778583102-Q9MV1WAwOj6Ptk3YZnUhvNco.png" },

{ id:23, prefecture:"愛知", region:"中部", title:"鯱と錨",
  scene:"名古屋城の鯱が逆三角形の底で躍動している。菊と錨。伊勢湾の工業夜景。",
  keyword:"製造する意志", message:"ものを作り続けることへの執着が、この県を動かしている。",
  image:"1778583457-GB0UfY5DlbhVgdvCu4LSiEmQ.png" },

{ id:24, prefecture:"三重", region:"近畿", title:"聖と海",
  scene:"伊勢神宮と真珠と海女。三重は聖俗が混在している。大台ヶ原の深い森が山として立つ。",
  keyword:"層の深さ", message:"表面だけでは読めない。",
  image:"1778585600-OvJW5QI7dPZFB12tChgAzrlH.png" },

{ id:25, prefecture:"滋賀", region:"近畿", title:"湖の国",
  scene:"琵琶湖が逆三角形に広がる。彦根城が底に浮かぶ。信楽たぬきが右側で笑っている。葦と狸。",
  keyword:"余白の豊かさ", message:"琵琶湖という巨大な空白が、この県を成立させている。",
  image:"1778583680-feHi7FZsBVJd1MEPb0nDOraL.png" },

{ id:26, prefecture:"京都", region:"近畿", title:"層と層",
  scene:"比叡山の山頂に寺がある。伏見稲荷の鳥居が底から続く。友禅と茶筅。",
  keyword:"堆積", message:"時間が積み重なって、今も積み重なっている。",
  image:"1778583703-JwYayfNl6QHctUCegmEXiqvD.png" },

{ id:27, prefecture:"大阪", region:"近畿", title:"賑やかな底力",
  scene:"通天閣が金の円を目指す。たこ焼きと百合。大阪城と湾岸夜景。看板の文字まで読める。",
  keyword:"生の肯定", message:"食べて、騒いで、それが哲学になっている。",
  image:"1778583726-7WzdBvxAtbE5FDs4fKOcm2uL.png" },

{ id:28, prefecture:"兵庫", region:"近畿", title:"橋と牛",
  scene:"明石海峡大橋が逆三角形の水面に映える。但馬牛が堂々と立つ。杉玉と姫路城。",
  keyword:"接続", message:"本州と四国を繋ぎ、都市と農村を一枚の県に収める。",
  image:"1778583754-wCYsAcWO7J4bMujFlRPGzfq2.png" },

{ id:29, prefecture:"奈良", region:"近畿", title:"鹿と仏",
  scene:"鹿が左側に立っている。東大寺が底に広がる。吉野山の重なる峰、柿の実。",
  keyword:"古さの現在形", message:"古いものが今も生きている場所。",
  image:"1778583781-7hGuUnWRlTXydMLA5BD9xIop.png" },

{ id:30, prefecture:"和歌山", region:"近畿", title:"垂直の聖地",
  scene:"那智の滝が上から下まで一枚を貫いている。高野山、熊野、みかん。",
  keyword:"垂直の信仰", message:"山から滝へ、天から地へ。縦の軸で生きる土地。",
  image:"1778583805-hq7vAV0eUM2gG6sPLD8W5BCp.png" },

{ id:31, prefecture:"鳥取", region:"中国", title:"砂と弧",
  scene:"砂丘の風紋が上にも下にも入っている。浦富の岩拱門。日本梨と大山。",
  keyword:"消えては残るもの", message:"風が砂を動かす。それでも砂丘はある。",
  image:"1778584996-PW8HVDo3miZB4NxfGpQRr7w0.png" },

{ id:32, prefecture:"島根", region:"中国", title:"神話の重量",
  scene:"出雲大社の注連縄。石見神楽の鬼面。牡丹と隠岐島。",
  keyword:"起源", message:"日本の神話が生まれた場所は、今も重力が違う。",
  image:"1778583876-RwNtA5qZad3eW7hlBYrpXuSc.png" },

{ id:33, prefecture:"岡山", region:"中国", title:"庭と海",
  scene:"後楽園の松と池が底に広がる。白桃とマスカット。瀬戸内の島々。",
  keyword:"整えられた美", message:"自然を人が整えて、それがまた自然に見える。",
  image:"1778583949-ZQacNwy0C5Uls1fYtDFPiGVd.png" },

{ id:34, prefecture:"広島", region:"中国", title:"鳥居と牡蠣",
  scene:"厳島の海上鳥居が逆三角形の水面に映えている。紅葉と牡蠣。このシリーズで最も静かな水面。",
  keyword:"水の記憶", message:"海が全てを映し、全てを覚えている。",
  image:"1778583996-T37kUWVapXu6qGEzDj5JCfib.png" },

{ id:35, prefecture:"山口", region:"中国", title:"橋と海峡",
  scene:"錦帯橋の五つのアーチが底に。関門海峡を船が行き交う。河豚と萩焼。",
  keyword:"端の力", message:"本州の端にいることが、この土地を鍛えた。",
  image:"1778585814-qWl2r4xyGsmoJanRfEktFIQN.png" },

{ id:36, prefecture:"徳島", region:"四国", title:"渦と踊り",
  scene:"鳴門の渦潮が逆三角形に広がる。阿波踊りの踊り子が躍動する。すだちと大歩危の山。",
  keyword:"動くことの哲学", message:"踊らにゃ損々。止まらないことが答えだ。",
  image:"1778584094-hSLdHBQY1M2kqjFe9vp7J36P.png" },

{ id:37, prefecture:"香川", region:"四国", title:"階段の先",
  scene:"金刀比羅さんの石段が底から天へ続く。うどんとオリーブ。讃岐平野の穏やかな山。",
  keyword:"積み上げる日常", message:"一段一段、毎日登ることが信仰になる。",
  image:"1778584148-jimxPvTQSXOf0UgKVJzAy3wq.png" },

{ id:38, prefecture:"愛媛", region:"四国", title:"峰と橋",
  scene:"石鎚山の険しい岩肌。しまなみ海道の橋。みかんと砥部焼。松山城。",
  keyword:"険しさの先にある繋がり", message:"難所を越えた先に、橋がある。",
  image:"1778584793-1ze2I3p4Wrmj709XnOPRlxga.png" },

{ id:39, prefecture:"高知", region:"四国", title:"龍馬と黒潮",
  scene:"龍馬が太平洋を背に立っている。カツオと柚子。黒潮の広大な水面。",
  keyword:"開かれた意志", message:"海に向かって立つ人間は、遠くを見る。",
  image:"1778584221-5bL4GvCs0c26YPA9nFHq8UIf.png" },

{ id:40, prefecture:"福岡", region:"九州・沖縄", title:"玄関の熱",
  scene:"太宰府の鳥居と梅。博多の夜景。明太子と博多織。スカイタワーが逆三角形に立つ。",
  keyword:"受け取る力", message:"大陸から何かが来る時、最初に受け取るのがここだ。",
  image:"1778584237-etK8Bsmd1SykGgfFbcOjLp5I.png" },

{ id:41, prefecture:"佐賀", region:"九州・沖縄", title:"干潟と気球",
  scene:"有明海の干潟が広大に広がる。熱気球と有田焼。吉野ヶ里の物見櫓が静かに立つ。",
  keyword:"見えないものの豊かさ", message:"干潟は引き潮の時にしか現れない。",
  image:"1778584270-sSaHLtrE4fdOMZPJQiKzRY8V.png" },

{ id:42, prefecture:"長崎", region:"九州・沖縄", title:"出島の形",
  scene:"出島の扇形が底に浮かぶ。雲仙の噴煙。椿とカステラ。港町の夜景。",
  keyword:"接点", message:"閉じていた時代に、唯一開いていた場所。",
  image:"1778584281-235SvQZHca1UBCIfVoXpzs8F.png" },

{ id:43, prefecture:"熊本", region:"九州・沖縄", title:"阿蘇の器",
  scene:"阿蘇のカルデラは世界最大級だ。その巨大な器の中に人が住んでいる。蓮根とサンゴ。熊本城の石垣。",
  keyword:"器の大きさ", message:"火山が作った器に、命が満ちている。",
  image:"1778584308-S7KdTN1xzvUQbYjceLaCFkuD.png" },

{ id:44, prefecture:"大分", region:"九州・沖縄", title:"湯と鳥居",
  scene:"別府の湯煙が逆三角形に立ち込める。宇佐神宮の鳥居が水面に浮かぶ。かぼすと温泉の湯気。",
  keyword:"地熱", message:"地面の下から熱が来る。それが生活になっている。",
  image:"1778584603-xhmP37jATGI0tBULZ9Hycz2J.png" },

{ id:45, prefecture:"宮崎", region:"九州・沖縄", title:"南の神話",
  scene:"霧島の噴煙。青島神社の鬼の洗濯板。ハイビスカスとマンゴー。",
  keyword:"神代の明るさ", message:"天孫降臨の地は、今も光が強い。",
  image:"1778584743-BymDaUeFM325PS8qufGQLhCY.png" },

{ id:46, prefecture:"鹿児島", region:"九州・沖縄", title:"火山と庭",
  scene:"桜島が上にも逆三角形にも描かれている。薩摩切子と芋の葉。仙巌園の庭が灰の中に広がる。",
  keyword:"共存", message:"噴火し続ける山の隣で、庭を作る。それが答えだ。",
  image:"1778584711-wnK9fvWcjOS6aUAkR7GgqtCs.png" },

{ id:47, prefecture:"沖縄", region:"九州・沖縄", title:"別の青",
  scene:"このシリーズで唯一、海の青が画面に入った。首里城、シーサー、ハイビスカス、熱帯魚。",
  keyword:"固有の時間", message:"本土とは違う速さで、違う色で、時間が流れている。",
  image:"1778584691-edpaYkCRN9l7OmJnTMvDIyi0.png" }
];

const REGIONS_ORDER = ["北海道","東北","関東","中部","近畿","中国","四国","九州・沖縄"];
const IMG_BASE = "https://assets.st-note.com/img/";
function imgUrl(f){
  if(!f) return "";
  if(f.startsWith("http") || f.startsWith("images/")) return f;
  return IMG_BASE + f + "?width=1200";
}
const $ = (id) => document.getElementById(id);

/* ============================================================
   画面切り替え
   ============================================================ */
function switchScreen(name){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("show"));
  $("screen-" + name).classList.add("show");
  $("homeBtn").style.display = (name === "top") ? "none" : "flex";
  window.scrollTo({top:0, behavior:"smooth"});
}

/* ============================================================
   抽選（直前と同じ県は除外）
   ============================================================ */
let lastDrawnId = null;

function pickPrefecture(){
  const pool = prefectures.filter(p => p.id !== lastDrawnId);
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  lastDrawnId = chosen.id;
  return chosen;
}

/* ============================================================
   カードを引く（シャッフル→フリップ）
   ============================================================ */
function drawCard(){
  const p = pickPrefecture();
  switchScreen("flip");
  const inner = $("flipInner");
  inner.classList.remove("flipped", "shuffle");
  $("flipImg").style.display = "block";
  $("flipImg").nextElementSibling.style.display = "none";
  $("flipImg").src = imgUrl(p.image);
  $("flipImg").alt = p.prefecture;
  $("flipImgPlaceholderText").textContent = p.prefecture;
  void inner.offsetWidth;

  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if(reduced){
    setTimeout(()=>{ inner.classList.add("flipped"); }, 0);
    setTimeout(()=>{ showResult(p); }, 250);
    return;
  }

  inner.classList.add("shuffle");
  setTimeout(()=>{
    inner.classList.add("flipped");
  }, 550);
  setTimeout(()=>{
    showResult(p);
  }, 1350);
}

/* ============================================================
   結果画面
   ============================================================ */
function showResult(p){
  const hasImg = !!p.image;
  let html = "";
  html += '<div class="rs-pref">' + p.prefecture + '</div>';
  if(p.phantom){ html += '<div class="rs-phantom-badge">幻の六枚</div>'; }
  html += '<div class="rs-title">―― ' + p.title + '</div>';
  if(hasImg){
    html += '<div class="rs-img-wrap"><img src="' + imgUrl(p.image) + '" alt="' + p.prefecture + '" onerror="this.parentElement.innerHTML=\'<div class=&quot;pi-placeholder&quot; style=&quot;height:100%;&quot;>' + p.prefecture + '</div>\';"></div>';
  } else {
    html += '<div class="rs-img-wrap"><div class="pi-placeholder" style="height:100%;">' + p.prefecture + '</div></div>';
  }
  html += '<p class="rs-scene">' + p.scene + '</p>';
  html += '<div class="rs-keyword-row"><div class="rs-keyword-label">KEYWORD</div><div class="rs-keyword">' + p.keyword + '</div></div>';
  html += '<p class="rs-message">「' + p.message + '」</p>';
  html += '<div class="rs-actions">';
  html += '<div class="rs-actions-row">';
  html += '<button class="rs-draw-again" id="drawAgainBtn">もう一枚引く</button>';
  html += '<button class="rs-list-btn" id="toListBtn">47都道府県を見る</button>';
  html += '</div>';
  html += '<button class="rs-share-btn" id="shareBtn">結果をシェア</button>';
  html += '</div>';

  $("resultBody").innerHTML = html;
  switchScreen("result");

  $("drawAgainBtn").addEventListener("click", drawCard);
  $("toListBtn").addEventListener("click", showList);
  $("shareBtn").addEventListener("click", ()=> shareResult(p));
}

function shareResult(p){
  const url = location.href.split("#")[0];
  const text = "都道府県タロット ── " + p.prefecture + "「" + p.title + "」";
  const btn = $("shareBtn");
  if(navigator.share){
    navigator.share({ title: text, url: url }).catch(()=>{});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(text + " " + url).then(()=>{
      const orig = btn.textContent;
      btn.textContent = "コピーしました";
      setTimeout(()=>{ btn.textContent = orig; }, 1800);
    }).catch(()=>{});
  }
}

/* ============================================================
   一覧画面（地方ごと）
   ============================================================ */
function buildList(){
  const wrap = $("regionSections");
  wrap.innerHTML = "";
  REGIONS_ORDER.forEach(region=>{
    const items = prefectures.filter(p => p.region === region);
    const block = document.createElement("div");
    block.className = "region-block";
    const grid = items.map(p=>{
      const inner = p.image
        ? '<img src="' + imgUrl(p.image) + '" alt="' + p.prefecture + '" onerror="this.outerHTML=\'<div class=&quot;pi-placeholder&quot;>' + p.prefecture + '</div>\';">'
        : '<div class="pi-placeholder">' + p.prefecture + '</div>';
      return '<div class="pref-item" data-id="' + p.id + '">' + inner +
        '<div class="pi-text"><div class="pi-name">' + p.prefecture + (p.phantom ? ' <span class="pi-phantom">✦</span>' : '') + '</div></div></div>';
    }).join("");
    block.innerHTML = '<div class="region-name">' + region + '</div><div class="pref-grid">' + grid + '</div>';
    wrap.appendChild(block);
  });

  wrap.querySelectorAll(".pref-item").forEach(el=>{
    el.addEventListener("click", ()=>{
      const id = Number(el.dataset.id);
      const p = prefectures.find(x => x.id === id);
      lastDrawnId = p.id;
      showResult(p);
    });
  });
}

function showList(){
  buildList();
  switchScreen("list");
}

/* ============================================================
   イベント登録
   ============================================================ */
$("drawBtnTop").addEventListener("click", drawCard);
$("listBtnTop").addEventListener("click", showList);
$("homeBtn").addEventListener("click", ()=> switchScreen("top"));
