
/*Desrizione del file esercizio1.js:
myFunction è la funzione che si attiva premendo il pulsante SCRIVI nel browser.
Questa funzione restituisce (leftPartOfResult + rightPartOfResult), che sarebbe il numero inserito dall'utente nella
casella di input del browser, scritto in in lettere.
Questo programma funziona per numeri interi compresi tra 0 e 999999, per i numeri interi minori di zero restituisce 
(in numero inserito è troppo piccolo!), per i numeri interi maggiori di 999999 restituisce (i numero inserito è troppo grande!) */

function myFunction() {
    var x = document.getElementById("myInput").value;/*La variabile x è in numero in cifre scritto dall'utete nel campo di input*/

    /*variabili e costanti*/
    units = ["", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci"];
    dozens = ["", "", "venti", "trenta", "quaranta", "cinquanta", "sessanata", "settanta", "ottanta", "novanta"];
    dozensWithoutLastLetter = ["", "vent", "trent", "quarant", "cinquant", "sessant", "settant", "ottant", "novant"]
    dozensFrom10To19 = ["dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"]

    const CENTO = "cento";
    const MILLE = "mille";
    const MILA = "mila";

    var leftPartOfResult;
    var rightPartOfResult;

    /*************controlli: Math.floor() prende il numero e lo arrotonda all'intero più piccolo*****************************/

    var t1 = Math.floor(x / 10);/*t1 è il numero x diviso per 10 e arrotondato per difetto*/

    var j = Math.floor(x / 100);/*j è il numero x diviso per 100 e arrotondato per difetto*/

    var z = Math.floor(x / 1000);/*z è il numero x diviso per 1000 e arrotondato per difetto*/

    var r1 = Math.floor(x / 10000);/*r1 è il numero x diviso per 10000 e arrotondato per difetto*/

    var s1 = Math.floor(x / 100000);/*s1 è il numero x diviso per 100000 e arrotondato per difetto*/

    /*****************************************numeri da 0 a 999****************************************************************/

    /*numeri da 10 a 19*/
    if (t1 == 1) {
        var leftPartOfResult = "";
        var rightPartOfResult = dozensFrom10To19[x - 10];
    }
    /*numeri da 1 a 9 + numeri da 20 a 99 compresi quelli che finiscono per 1 e 8*/
    if (j == 0 && t1 != 1) {
        var leftPartOfResult = "";
        var rightPartOfResult = dozens[t1] + units[x - t1 * 10];
        if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
            var rightPartOfResult = dozensWithoutLastLetter[t1 - 1] + units[x - t1 * 10];
        } if (x == 1) {
            var rightPartOfResult = units[x];
        } if (x == 8) {
            var rightPartOfResult = units[x];
        }
    }
    /*numeri da 100 a 109 e da 120 a 199 compresi quelli che finiscono per 1 e 8*/
    if (z == 0 && j != 0 && t1 != 0) {
        var leftPartOfResult = "";
        if (j == 1 && t1 != 11) {
            var rightPartOfResult = CENTO + dozens[Math.floor((x - 100) / 10)] + units[x - t1 * 10];
            if (t1 != 10) {
                if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                    var rightPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - 100) / 10) - 1] + units[x - t1 * 10];
                }
            }
        }
        /*numeri da 110 a 119*/
        if (t1 == 11) {
            var leftPartOfResult = "";
            var rightPartOfResult = CENTO + dozensFrom10To19[x - j * 110];
        }
        /*numeri da 200 a 999, non c'é da -10 a -19 ,sono compresi i numeri che finiscono con 1 e 8*/
        if (z == 0 && j >= 2 && j <= 9) {
            var leftPartOfResult = "";
            var rightPartOfResult = units[j] + CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];
            if (t1 != 20 && t1 != 30 && t1 != 40 && t1 != 40 && t1 != 50 && t1 != 60 && t1 != 70 && t1 != 80 && t1 != 90) {
                if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                    var rightPartOfResult = units[j] + CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10) - 1] + units[x - t1 * 10]
                }
            }
        }
        /*numeri che finiscono per -10 a -19 compresi tra 200 e 999*/
        if (t1 == 21 || t1 == 31 || t1 == 41 || t1 == 51 || t1 == 61 || t1 == 71 || t1 == 81 | t1 == 91) {
            var leftPartOfResult = "";
            var rightPartOfResult = units[j] + CENTO + dozensFrom10To19[x - t1 * 10];
        }
    }
    /*****************************************numeri da 1000 a 1999****************************************************************/
    if (z == 1) {/*numeri compresi tra 1000 e 1999*/
        var leftPartOfResult = MILLE;
        if (j == 10) {/*numeri da 1000 a 1099***********************************************************/
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*numeri da 1009 a 1010*/
                var rightPartOfResult = units[x - j * 100];
            } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*numeri da 1010 a 1019*/
                var rightPartOfResult = dozensFrom10To19[x - j * 100 - 10];
            } if (x - j * 100 >= 20 && x - j * 100 <= 99) {/*numeri da 1020 a 1099 senza quelli che finiscono per 1 e per 8*/
                var rightPartOfResult = dozens[Math.floor((x - 1000) / 10)] + units[Math.floor(x - t1 * 10)];/*senza quelli che finiscono per 1 e per 8*/
                if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {/*quelli che finiscono per 1 e per 8*/
                    var rightPartOfResult = dozensWithoutLastLetter[Math.floor((x - 1000) / 10) - 1] + units[Math.floor(x - t1 * 10)];
                }
            }
        }
        if (j >= 11 && j <= 19) {/*numeri da 1100 a 1999********************************************************************/
            if (j == 11) {/*numeri da 1100 a 1199*************************/
                if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*numeri da 1100 a 1109*/
                    var rightPartOfResult = CENTO + units[x - j * 100];
                } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*numeri da 1110 a 1119*/
                    var rightPartOfResult = CENTO + dozensFrom10To19[x - j * 100 - 10];
                } if (x - j * 100 >= 20 && x - j * 100 <= 99) {/*numeri da 1120 a 1199 senza quelli che finiscono er 1 e 8*/
                    var rightPartOfResult = CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];
                    if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {/*quelli che finiscono per 1 e per 8*/
                        var rightPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10) - 1] + units[x - t1 * 10];
                    }
                }
            }
            if (j >= 12 && j <= 19) {/*numeri da 1200 a 1999*************************/
                if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*compresi tra --01 e --09*/
                    var rightPartOfResult = units[Math.floor((x - 1000) / 100)] + CENTO + units[x - t1 * 10];
                } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*compresi tra --10 e --19*/
                    var rightPartOfResult = units[Math.floor((x - 1000) / 100)] + CENTO + dozensFrom10To19[x - j * 100 - 10];
                } if (x - j * 100 >= 20 && x - j * 100 <= 99) {/*numeri da --20 a --99 senza quelli che finiscono er 1 e 8*/
                    var rightPartOfResult = units[Math.floor((x - 1000) / 100)] + CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];
                    if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {/*quelli che finiscono per 1 e per 8*/
                        var rightPartOfResult = units[Math.floor((x - 1000) / 100)] + CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10) - 1] + units[x - t1 * 10];
                    }
                }
            }
        }
    }
    /*******************numeri da 2000 a 9999 ************************************************************************/
    if (z >= 2 && z <= 9) {/*numeri compresi tra -000 e -999*/
        var leftPartOfResult = units[z] + MILA;
        if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*numeri da -001 a -009*/
            var rightPartOfResult = units[x - j * 100];
        } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*numeri da -010 a -019*/
            var rightPartOfResult = dozensFrom10To19[x - j * 100 - 10];
        } if (x - j * 100 >= 20 && x - j * 100 <= 99) {
            var rightPartOfResult = dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*numeri da -020 a -099 senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[Math.floor(x - t1 * 10)];/*quelli che finiscono per 1 e per 8*/
            }

        }
        /*numeri compresi tra 2100 e 2199, tra 3100 e 3199 ----fina 9100 a 9199*/
        if (x - z * 1000 >= 100 && x - z * 1000 <= 199) {
            var rightPartOfResult = CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*compresi quelli che finiscono per 10 a 19*/
                var rightPartOfResult = CENTO + dozensFrom10To19[x - j * 100 - 10];
            } if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli ch finiscono per 101*/
                var rightPartOfResult = CENTO + units[x - j * 100];
            }
        }

        /*numeri compresi tra i 2200 e 2999, tra 3200 e 3999...fino a 9200 a 9999*/
        if (x - z * 1000 >= 200 && x - z * 1000 <= 999) {
            var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensFrom10To19[x - j * 100 - 10];/*compresi quelli che finiscono per 10 a 19*/
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 201, 301...fino a 901*/
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + units[x - j * 100];
            }
        }
    }
    /*******************************numeri da 10000 a 19999********************************************************/
    if (z >= 10 && z <= 19) {
        var leftPartOfResult = dozensFrom10To19[z - 10] + MILA;
        if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*numeri da -001 a -009*/
            var rightPartOfResult = units[x - j * 100];
        } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*numeri da -010 a -019*/
            var rightPartOfResult = dozensFrom10To19[x - j * 100 - 10];
        } if (x - j * 100 >= 20 && x - j * 100 <= 99) {
            var rightPartOfResult = dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*numeri da -020 a -099 senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[Math.floor(x - t1 * 10)];/*quelli che finiscono per 1 e per 8*/
            }

        }
        /*numeri compresi tra 10100 e 10199, tra 11100 e 11199 ----fina 19100 a 19199*/
        if (x - z * 1000 >= 100 && x - z * 1000 <= 199) {
            var rightPartOfResult = CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*compresi quelli che finiscono per 10 a 19*/
                var rightPartOfResult = CENTO + dozensFrom10To19[x - j * 100 - 10];
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 101*/
                var rightPartOfResult = CENTO + units[x - j * 100];
            }

        }

        /*numeri compresi tra i 10200 e 10999, tra 11200 e 11999...fino a 19200 a 19999*/
        if (x - z * 1000 >= 200 && x - z * 1000 <= 999) {
            var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensFrom10To19[x - j * 100 - 10];/*compresi quelli che finiscono per 10 a 19*/
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 101, 201...fino a 901*/
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + units[x - j * 100];
            }
        }

    }
    /*******************************************numeri da 20000 a 99999*****************************/
    if (z >= 20 && z <= 99) {
        var leftPartOfResult = dozens[r1] + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;/*per tutti meno quelli che finscono per 1 e 8*/
        if (z - r1 * 10 == 1 || z - r1 * 10 == 8) {
            var leftPartOfResult = dozensWithoutLastLetter[r1 - 1] + units[Math.floor((x - r1 * 10000) / 1000)] + c;   /*per quelli che finiscono per 1 e 8*/
        }
        if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*numeri da -001 a -009*/
            var rightPartOfResult = units[x - j * 100];
        } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*numeri da -010 a -019*/
            var rightPartOfResult = dozensFrom10To19[x - j * 100 - 10];
        } if (x - j * 100 >= 20 && x - j * 100 <= 99) {
            var rightPartOfResult = dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*numeri da -020 a -099 senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[Math.floor(x - t1 * 10)];/*quelli che finiscono per 1 e per 8*/
            }

        }
        /*numeri compresi tra 20100 e 20199, tra 30100 e 30199 ----fina 90100 a 90199*/
        if (x - z * 1000 >= 100 && x - z * 1000 <= 199) {
            var rightPartOfResult = CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - z * 1000 >= 110 && x - z * 1000 <= 119) {
                var rightPartOfResult = CENTO + dozensFrom10To19[x - j * 100 - 10];/*con quelli che finiscono per 10 a 19*/
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 101*/
                var rightPartOfResult = CENTO + units[x - j * 100];
            }
        }

        /*numeri compresi tra i 20200 e 20999, tra 30200 e 30999...fino a 99200 a 99999*/
        if (x - z * 1000 >= 200 && x - z * 1000 <= 999) {
            var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensFrom10To19[x - j * 100 - 10];
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 101, 201..fino a 901*/
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + units[x - j * 100];
            }
        }
    }
    /*****************************************numeri da 100000 a 999999******************************************************/
    if (z >= 100 && z <= 999) {
        if (z >= 100 && z <= 199) {/*numeri dai 100000 a 199000*/
            if (z >= 100 && z <= 109) {/*numeri dai 100000 a 109999*/
                var leftPartOfResult = CENTO + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;
            }
            if (z >= 110 && z <= 119) {/*numeri dai 110000 a 119999*/
                var leftPartOfResult = CENTO + dozensFrom10To19[z - 110] + MILA;
            }
            if (z >= 120 && z <= 199) {/*da 120000 a 199999 sza quelli che finiscono per 1 e per 8*/
                var leftPartOfResult = CENTO + dozens[Math.floor((x - s1 * 100000) / 10000)] + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;
                if (Math.floor((x - r1 * 10000) / 1000) == 1 || Math.floor((x - r1 * 10000) / 1000) == 8) {/*compresi quelli che finiscono per 1 e per 8*/
                    var leftPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - s1 * 100000) / 10000) - 1] + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;
                }
            }
        }
        if (s1 >= 2 && s1 <= 9) {
            if (Math.floor((x - s1 * 100000) / 1000) >= 0 && Math.floor((x - s1 * 100000) / 1000) <= 9) {/*numeri da 200000 a 209000, da 300000 a 309000..fino a 900000 a 909000*/
                var leftPartOfResult = units[s1] + CENTO + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;
            }
            if (Math.floor((x - s1 * 100000) / 1000) >= 10 && Math.floor((x - s1 * 100000) / 1000) <= 19) {/*numeri da 210000 a 219000, da 310000 a 319000..fino a 910000 a 919000*/
                var leftPartOfResult = units[s1] + CENTO + dozensFrom10To19[Math.floor((x - s1 * 100000) / 1000) - 10] + MILA;
            }
            if (Math.floor((x - s1 * 100000) / 1000) >= 20 && Math.floor((x - s1 * 100000) / 1000) <= 99) {/*numeri da 220000 a 299000, da 320000 a 329000..fino a 920000 a 929000 senza queli che finiscono per 1 e 8*/
                var leftPartOfResult = units[s1] + CENTO + dozens[Math.floor((x - s1 * 100000) / 10000)] + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;
                if (Math.floor((x - r1 * 10000) / 1000) == 1 || Math.floor((x - r1 * 10000) / 1000) == 1) {/*compresi quelli che finiscono per 1 e 8*/
                    var leftPartOfResult = units[s1] + CENTO + dozensWithoutLastLetter[Math.floor((x - s1 * 100000) / 10000) - 1] + units[Math.floor((x - r1 * 10000) / 1000)] + MILA;
                }

            }

        }
        /*****provo da qui */
        /*100000 a 100099*/
        if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*numeri da -001 a -009*/
            var rightPartOfResult = units[x - j * 100];
        } if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*numeri da -010 a -019*/
            var rightPartOfResult = dozensFrom10To19[x - j * 100 - 10];
        } if (x - j * 100 >= 20 && x - j * 100 <= 99) {
            var rightPartOfResult = dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*numeri da -020 a -099 senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[Math.floor(x - t1 * 10)];/*quelli che finiscono per 1 e per 8*/
            }

        }
        /*numeri compresi tra 100100 e 100199, tra 110100 e 110199 ----fina 190100 a 190199*/
        if (x - z * 1000 >= 100 && x - z * 1000 <= 199) {
            var rightPartOfResult = CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {/*compresi quelli che finiscono per 10 a 19*/
                var rightPartOfResult = CENTO + dozensFrom10To19[x - j * 100 - 10];
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 101*/
                var rightPartOfResult = CENTO + units[x - j * 100];
            }
        }

        /*numeri compresi tra i 10200 e 10999, tra 11200 e 11999...fino a 19200 a 19999*/
        if (x - z * 1000 >= 200 && x - z * 1000 <= 999) {
            var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozens[Math.floor((x - j * 100) / 10)] + units[x - t1 * 10];/*senza quelli che finiscono per 1 e per 8*/
            if (x - t1 * 10 == 1 || x - t1 * 10 == 8) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensWithoutLastLetter[Math.floor((x - j * 100) / 10 - 1)] + units[x - t1 * 10];/*con quelli che finiscono per 1 e per 8*/
            }
            if (x - j * 100 >= 10 && x - j * 100 <= 19) {
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + dozensFrom10To19[x - j * 100 - 10];/*compresi quelli che finiscono per 10 a 19*/
            }
            if (x - j * 100 >= 0 && x - j * 100 <= 9) {/*quelli che finiscono per 201, 301..fino a 901*/
                var rightPartOfResult = units[Math.floor((x - z * 1000) / 100)] + CENTO + units[x - j * 100];
            }
        }

    }
    if (x > 999999) {
        var leftPartOfResult = "Il numero inserito è troppo grande!";
        var rightPartOfResult = "";
    }
    if (x < 0) {
        var leftPartOfResult = "Il numero inserito è troppo piccolo!"
        var rightPartOfResult = "";
    }
    if (x == 0) {/*il numero 0*/
        var leftPartOfResult = "zero";
        var rightPartOfResult = "";
    }


    document.getElementById("demo").innerHTML = leftPartOfResult + rightPartOfResult;
}









