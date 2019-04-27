

     async function fb(url) {
         console.log(url);
        const res = await fetch('https://graph.facebook.com/v3.2/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: url, access_token: 'EAAI7rblMEtIBAHIRD6URrLnqsXuhGnMFDB0RuHoSN2RrTdVOIN9rUPAaRSmcIS04gp9lX0DZAxutW9ZBZCS0H5ddifJ5sXHQuPee4o2B5vTYpdGHmyHMOp1rOPmYHhX9mGwHp4oQ0na71hnofHLZAAlZBZCfzfkqlLfZAy0myHAoqiTDPbJdMvScNj4pStGmG5jZCvVjUf2p10wl9h2jHRqNBn4bZAPk8gdgGiKNeMx9bywZDZD' })
        })
            .then(res => {
                return res.json();
            })
            .then(myjson => {
                return myjson.id;
            });
        return res;
    }

    async function getreactiondata(id,reaction) {

        var url = 'https://graph.facebook.com/v3.2/'+id+'?fields=reactions.type('+reaction+').limit(0).summary(total_count)&access_token=EAAI7rblMEtIBAAulZBMqNI43zlW7KBImYCX7ASQJL3KhDZBnOWUSkTPH2U5PoFJkkecLTrE1JgNgLtfZBtFDlCn3lcmop2ziPP8vFLzTA4iAcdD10owZAhpesROvb61XSs3eCKlkqFC9VDdZA1ZAWTFWvSOxKxrvx1wtzM9tjVPNwTMrA8rFL8QMHGpFDDNV6RpXGfFBzZBZCNccdNHkgcUUP2LEwZAnj7U1tMroGQRw8SgZDZD';
       const res= await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                return myJson.reactions.summary.total_count;
                 
            });
            console.log(res);
        return res;
    }

    async function global(cite) {

        var item = await fb(cite);
        console.log(item);

        var LikeCount = await getreactiondata(item,'LIKE');
        var LoveCount = await getreactiondata(item,'LOVE');
        var WowCount = await getreactiondata(item,'WOW');
        var AngryCount = await getreactiondata(item,'ANGRY');
        var HahaCount = await getreactiondata(item,'HAHA');
        var SadCount = await getreactiondata(item,'SAD');
        var arr=[LikeCount,LoveCount,WowCount,AngryCount,HahaCount,SadCount];
    //   console.log(LikeCount);
    //   console.log(LoveCount);
    //   console.log(WowCount);
    //   console.log(AngryCount);
    //   console.log(HahaCount);
    //   console.log(SadCount);
      console.log(arr);
      return arr;
    }

    
async function main(){
var urls =document.querySelectorAll("cite");
for(i=0; i<urls.length;i++ )
{
var para = document.createElement('p');
var avtext = "FB Likes = ";
var countArr= await global(urls[i].innerHTML);
count = countArr[0];
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);

var para = document.createElement('p');
var avtext = "FB Shares = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);


var para = document.createElement('p');
var avtext = "FB Love = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);


var para = document.createElement('p');
var avtext = "FB Wow = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);

var para = document.createElement('p');
var avtext = "FB HaHa = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);

var para = document.createElement('p');
var avtext = "FB Sad = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);

var para = document.createElement('p');
var avtext = "FB Angry = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);

var para = document.createElement('p');
var avtext = "Comments = ";
count = 50;
avtext = avtext +  count;
para.textContent = avtext;
urls[i].appendChild(para);
//urls[i].innerHTML;

}
}
main();