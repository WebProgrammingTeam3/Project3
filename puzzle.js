//shuffles the pictures at random
    function shuffle() {
    var temp = new Array();
    while(temp.length < 9) {
        var number = Math.round(Math.random() * 100);
        if((number == 11) || (number == 12) || (number == 13) || (number == 21) || (number == 22) || (number == 23) || (number == 31) || (number == 32) || (number == 33)) {
            if(!temp.includes(number)) {
                temp[temp.length] = number;
            }
        }
    }
    document.getElementById('p11').textContent = temp[0];
    document.getElementById('p11').style.background = 'url('+temp[0] + '.png)';

    document.getElementById('p12').textContent = temp[1];
    document.getElementById('p12').style.background = 'url('+temp[1] + '.png)';

    document.getElementById('p13').textContent = temp[2];
    document.getElementById('p13').style.background = 'url('+temp[2] + '.png)';

    document.getElementById('p21').textContent = temp[3];
    document.getElementById('p21').style.background = 'url('+temp[3] + '.png)';

    document.getElementById('p22').textContent = temp[4];
    document.getElementById('p22').style.background = 'url('+temp[4] + '.png)';

    document.getElementById('p23').textContent = temp[5];
    document.getElementById('p23').style.background = 'url('+temp[5] + '.png)';

    document.getElementById('p31').textContent = temp[6];
    document.getElementById('p31').style.background = 'url('+temp[6] + '.png)';

    document.getElementById('p32').textContent = temp[7];
    document.getElementById('p32').style.background = 'url('+temp[7] + '.png)';

    document.getElementById('p33').textContent = temp[8];
    document.getElementById('p33').style.background = 'url('+temp[8] + '.png)';

    document.getElementById('moves').textContent = "Moves: 0";

    //Moves the pieces
    function changing(piece) {
        if(document.getElementById(piece).textContent != '11') {
            switch(piece) {
                case 'p11':
                    if(document.getElementById('p12').textContent == '11') {
                        var num = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = num;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    }
                    if(document.getElementById('p21').textContent == '11') {
                         num = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = num;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    }

                break;
                case 'p12':
                    if(document.getElementById('p11').textContent == '11') {
                         num = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = num;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    }
                    if(document.getElementById('p22').textContent == '11') {
                         num = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = num;

                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    }
                    if(document.getElementById('p13').textContent == '11') {
                         num = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = num;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    }

                break;
                case 'p13':
                    if(document.getElementById('p12').textContent == '11') {
                         num = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = num;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                    }
                    if(document.getElementById('p23').textContent == '11') {
                         num = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = num;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    }

                break;
                case 'p21':
                    if(document.getElementById('p11').textContent == '11') {
                         num = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = num;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    }
                    if(document.getElementById('p22').textContent == '11') {
                         num = document.getElementById('p23').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = num;

                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    }
                    if(document.getElementById('p31').textContent == '11') {
                         num = document.getElementById('p23').textContent;
                        document.getElementById('p31').textContent = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = num;

                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                    }

                break;
                case 'p22':
                    if(document.getElementById('p12').textContent == '11') {
                         num = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = num;

                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    }
                    if(document.getElementById('p23').textContent == '11') {
                         num = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = num;

                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    }
                    if(document.getElementById('p32').textContent == '11') {
                         num = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = num;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    }
                    if(document.getElementById('p21').textContent == '11') {
                         num = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = num;

                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    }

                break;
                case 'p23':
                    if(document.getElementById('p13').textContent == '11') {
                         num = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = num;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    }
                    if(document.getElementById('p22').textContent == '11') {
                         num = document.getElementById('p21').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = num;

                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    }
                    if(document.getElementById('p33').textContent == '11') {
                         num = document.getElementById('p21').textContent;
                        document.getElementById('p33').textContent = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = num;

                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                    }

                break;
                case 'p31':
                    if(document.getElementById('p21').textContent == '11') {
                         num = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = num;

                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    }
                    if(document.getElementById('p32').textContent == '11') {
                         num = document.getElementById('p21').textContent;
                        document.getElementById('p32').textContent = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = num;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    }

                break;
                case 'p32':
                    if(document.getElementById('p31').textContent == '11') {
                         num = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = num;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                    }
                    if(document.getElementById('p22').textContent == '11') {
                         num = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = num;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                    }
                    if(document.getElementById('p33').textContent == '11') {
                         num = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = num;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    }

                break;
                case 'p33':
                    if(document.getElementById('p32').textContent == '11') {
                         num = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = num;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    }
                    if(document.getElementById('p23').textContent == '11') {
                         num = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = num;

                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                    }
                break;

            }
        }
    }

}