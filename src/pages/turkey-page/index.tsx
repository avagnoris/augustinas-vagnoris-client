import { Box, Container } from '@mui/material';
import React from 'react';
import ShowMoreText from 'react-show-more-text';

const TurkeyPage: React.FC = () => (
  <Container sx={{
    textAlign: 'center', mb: 2, display: 'grid', gridTemplateColumns: '50.5% 50.5%',
  }}
  >
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: '96%',
          maxHeight: 360,
          mt: 2,
        }}
        alt="ARMONIA HOLIDAY VILLAGE&SPA"
        src="https://kelioniuakademija.lt/hotel/240/panaroma_yeni_6145.jpg"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'success.main',
          borderRadius: '0px 0px 8px 8px',
          boxShadow: 1,
          fontWeight: 'bold',
          maxWidth: '96%',
        }}
      >
        <ShowMoreText
          /* Default options */
          lines={1}
          more="Rodyti daugiau"
          less="Rodyti mažiau"
          className="content-css"
          anchorClass="my-anchor-css-class"
          expanded={false}
          width={410}
          truncatedEndingComponent="... "
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 1,
              minWidth: { md: 350 },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: 18, mt: 1, color: 'white',
              }}
            >
              ARMONIA HOLIDAY VILLAGE&SPA
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Bodrumas, Turkija
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio vieta
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Apie 54 km iki Milaso Bodrumo oro uosto, apie 242 km iki Izmiro oro uosto, apie 225 km iki Dalamano oro uosto, apie 24 km iki Bodrumo centro, apie 5 km iki Turgutreiso gyvenvietės, ant jūros kanto.
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbutis
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Pastatytas 1989 metais, bendras plotas apima 20 000 m2, paskutinį kartą atnaujintas 2016 metais.
              Viešbutį sudaro devyni 3-jų aukštų pastatai.
              306 standard room tipo numeriai (4 iš jų pritaikyti asmenims su negalia (maks. 2 asm.), maks. 3 asm., 20 m2.
              48 vieno kambario large room tipo numeriai (maks. 3+1 asm., 26 m2)
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio teritorijoje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>prie baseino: paplūdimio rankšluosčiai nemokamai</li>
              <li>prie baseino: skėčiai, gultai, čiužiniai - nemokamai</li>
              <li>restoranai: 1 (pagrindinis)</li>
              <li>dietinis meniu</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>konferencijų salės: 2 (30-200 asm.)</li>
              <li>belaidis internetas nemokamai (visoje viešbučio teritorijoje)</li>
              <li>baseinai: 2 (atviri)</li>
              <li>a la carte restoranai: 3 (turkiškas ir žuvies, pagal išankstinę rezervaciją, viešnagės metu kiekviename restorane vieną kartą galima apsilankyti nemokamai; dirba nuo 15.05 iki 15.09, religinių švenčių metu nedirba: Ramadanas ir Kurban Bayram)</li>
              <li>vandens kalneliai: 3</li>
              <li> barai: 5</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Numeryje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>dušas</li>
              <li>televizorius: yra</li>
              <li>patalynės keitimas: 3 kartus per savaitę</li>
              <li> oro kondicionierius: individualus</li>
              <li>numerių tvarkymas: kasdien</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Pramogos ir sportas:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>sauna nemokamai</li>
              <li>teniso inventorius nemokamai</li>
              <li>burlenčių sportas už papildomą mokestį (su licencija</li>
              <li>mini golfas nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>gyva muzika nemokamai (1 kartą per savaitę)</li>
              <li>stalo tenisas nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>motorinės vandens sporto priemonės už papildomą mokestį</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 489€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: '96%',
          maxHeight: 360,
          mt: 2,
        }}
        alt="DUJA-HOTELS-BODRUM"
        src="https://kelioniuakademija.lt/hotel/5004/699-DUJA-HOTELS-BODRUM.jpg"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'success.main',
          borderRadius: '0px 0px 8px 8px',
          boxShadow: 1,
          fontWeight: 'bold',
          maxWidth: '96%',
        }}
      >
        <ShowMoreText
          /* Default options */
          lines={1}
          more="Rodyti daugiau"
          less="Rodyti mažiau"
          className="content-css"
          anchorClass="my-anchor-css-class"
          expanded={false}
          width={410}
          truncatedEndingComponent="... "
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 1,
              minWidth: { md: 350 },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: 18, mt: 1, color: 'white',
              }}
            >
              DUJA HOTELS BODRUM
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Bodrumas, Turkija
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio vieta
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Apie 23 km iki Milaso Bodrumo oro uosto, apie 208 km iki Izmiro oro uosto, apie 191 km iki Dalamano oro uosto, apie 10 km iki Bodrumo centro, apie 5 km iki Torbos gyvenvietės, ant jūros kanto.
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbutis
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Viešbutis atidarytas 2019 metais, bendras plotas 87 000 m2.
              Viešbutį sudaro pagrindinis 5-ių aukštų Hotel pastatas, 4-ių aukštų Club pastatas ir keturiasdešimt vienas 3-jų aukštų kotedžas (Villa).
              92 hotel rooms tipo numeriai (5 iš jų pritaikyti asmenims su negalia, maks. 3 asm., 23-33 m2).
              323 villa standard rooms tipo numeriai (maks. 3+1 asm., 28 m2).
              54 club rooms tipo numeriai (maks. 2+1 asm., 24 m2).
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio teritorijoje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>vandens kalneliai: 2</li>
              <li>konferencijų salės: 3 (88-350 asm.)</li>
              <li>prie baseino: skėčiai, gultai - nemokamai</li>
              <li>skalbykla už papildomą mokestį</li>
              <li>uždari baseinai: 1</li>
              <li>baseinai: 3 (atviri)</li>
              <li>belaidis internetas nemokamai ( 15 min. visos viešnagės metu)</li>
              <li>a la carte restoranai: 5 (turkiškas, žuvies, kinų, italų, pagal išankstinę rezervaciją, viešnagės mietu vieną restoraną vieną kartą galima aplankyti nemokamai)</li>
              <li>restoranai: 1 (pagrindinis)</li>
              <li>prie baseino: paplūdimio rankšluosčiai nemokama</li>
              <li>SPA centras</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Numeryje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>mini baras 2 (gaivieji gėrimai kasdien)</li>
              <li>oro kondicionierius: centrinis</li>
              <li>vonia arba dušas</li>
              <li>patalynės keitimas: 3 kartus per savaitę</li>
              <li>balkonas/terasa (Hotel, Village)</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Pramogos ir sportas:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>pramoginiai renginiai nemokamai</li>
              <li>teniso inventorius nemokamai</li>
              <li>gyva muzika nemokamai</li>
              <li>mini golfas nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>gyva muzika nemokamai (1 kartą per savaitę)</li>
              <li>stalo tenisas nemokamai</li>
              <li>smiginis nemokamai</li>
              <li>diskoteka nemokamai (įėjimas)</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 519€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: '96%',
          maxHeight: 360,
          mt: 2,
        }}
        alt="AYAZ-AQUA-HOTEL"
        src="https://kelioniuakademija.lt/hotel/11029/743-AYAZ-AQUA-HOTEL.JPG"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'success.main',
          borderRadius: '0px 0px 8px 8px',
          boxShadow: 1,
          fontWeight: 'bold',
          maxWidth: '96%',
        }}
      >
        <ShowMoreText
          /* Default options */
          lines={1}
          more="Rodyti daugiau"
          less="Rodyti mažiau"
          className="content-css"
          anchorClass="my-anchor-css-class"
          expanded={false}
          width={410}
          truncatedEndingComponent="... "
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 1,
              minWidth: { md: 350 },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: 18, mt: 1, color: 'white',
              }}
            >
              CLUB CACTUS PARADISE
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Kušadasis, Izmiras, Turkija
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio vieta
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Apie 40 km iki Izmiro miesto oro uosto, apie 167 km iki Bodrumo oro uosto, apie 45 km iki Kušadasio centro, apie 2 km iki Gumuldur gyvenvietės, ant jūros kranto.
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbutis
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Pastatytas 2004 metais, bendras plotas apima 2500 m2, paskutinį kartą atnaujintas 2012 metais.
              Viešbutį sudaro 5-ių aukštų pastatas.
              166 Standard Room tipo numeriai (maks. 3 asm., 25 m2);
              Promo Room tipo numeriai (Standard tipo numeriai už sumažintą kainą);
              44 dviejų kambarių Family Room tipo numeriai (svetainė, miegamasis, atskirtas durimis, maks. 4 asm., 35 m2).
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio teritorijoje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>prie baseino: paplūdimio rankšluosčiai – už papildomą mokestį</li>
              <li>restoranai: 1 (pagrindinis</li>
              <li>prie baseino: skėčiai, gultai, čiužiniai – nemokamai</li>
              <li>konferencijų salės: 2 (iki 60 ir iki 100 asm.)</li>
              <li>gydytojo kabinetas</li>
              <li>kirpykla</li>
              <li>baseinai: 2 (atviri))</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>a la carte restoranai: 3 (turkiškas ir žuvies, pagal išankstinę rezervaciją, viešnagės metu kiekviename restorane vieną kartą galima apsilankyti nemokamai;</li>
              <li>barai: 3</li>
              <li>belaidis internetas: nemokamai</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Numeryje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>seifas: už papildomą mokestį</li>
              <li>grindys: kiliminė danga</li>
              <li>mini baras (vanduo papildomas kasdien)</li>
              <li>oro kondicionierius: centrinis</li>
              <li>numerių tvarkymas: kasdien</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Pramogos ir sportas:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>paplūdimio tinklinis: nemokamai</li>
              <li>turkiška pirtis: nemokamai</li>
              <li>futbolas paplūdimyje: nemokamai</li>
              <li>sauna: už papildomą mokestį</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>treniruoklių salė: nemokamai</li>
              <li>stalo tenisas nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>masažas: už papildomą mokestį</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 539€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: '96%',
          maxHeight: 360,
          mt: 2,
        }}
        alt="CLUB & HOTEL LETOONIA"
        src="https://kelioniuakademija.lt/hotel/190/IMG_8915_2335.jpg"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'success.main',
          borderRadius: '0px 0px 8px 8px',
          boxShadow: 1,
          fontWeight: 'bold',
          maxWidth: '96%',
        }}
      >
        <ShowMoreText
          /* Default options */
          lines={1}
          more="Rodyti daugiau"
          less="Rodyti mažiau"
          className="content-css"
          anchorClass="my-anchor-css-class"
          expanded={false}
          width={410}
          truncatedEndingComponent="... "
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 1,
              minWidth: { md: 350 },
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: 18, mt: 1, color: 'white',
              }}
            >
              CLUB & HOTEL LETOONIA
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Fetija, Marmaris, Turkija
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio vieta
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Apie 57 km iki Dalamano oro uosto, apie 4 km iki Fetijos miesto, ant jūros kranto, pusiasalyje (mokamas pervežimas su valtimi iki Fetijos miesto, pagal tvarkaraštį).
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbutis
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              Pastatytas 1989 metais, bendras plotas - 165 000 m2, paskutinį kartą atnaujintas 2015 metais. Atnaujintas 2017/18 metais.
              Viešbutį sudaro vienas pagrindinis 4-ių aukštų Hotel pastatas ir šešiasdešimt devyni 2-jų aukštų Club pastatai.
              Hotel pastate yra:
              111 hotel standard room tipo numerių (iš jų 6 connection room tipo numeriai, 56 m2, maks. 3+1 asm., 18–28 m2).
              Club pastatuose yra:
              509 bungalow room tipo numeriai (maks. 3+1 asm., 20 m2).
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Viešbučio teritorijoje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>baseinai: 3 (atviri)</li>
              <li>prie baseino: paplūdimio rankšluosčiai nemokamai</li>
              <li>prie baseino: skėčiai, gultai, čiužiniai - nemokamai)</li>
              <li>parduotuvės</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>uždari baseinai: 1</li>
              <li>belaidis internetas nemokamai (visoje viešbučio teritorijoje)</li>
              <li>vandens kalneliai: 3 (su nusileidimu į jūrą)</li>
              <li>a la carte restoranai: 3 (tarptautinis, žuvies, sušio, pagal išankstinę rezervaciją, už papildomą mokestį)</li>
              <li>SPA centras</li>
              <li>restoranai: 3 (pagrindiniai)</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Numeryje:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>prancūziškas balkonas (Club)</li>
              <li>televizorius: yra</li>
              <li>telefonas</li>
              <li>plaukų džiovintuvas: yra</li>
              <li>dušas</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'start', fontSize: 18,
              }}
            >
              Pramogos ir sportas:
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'justify',
              }}
            >
              <li>biliardas nemokamai</li>
              <li>buriavimo pamokos nemokamai (grupiniai)</li>
              <li>šaudymas iš lanko nemokamai</li>
              <li>krepšinis nemokamai</li>
              <li>paplūdimio tinklinis: nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>gyva muzika nemokamai (1 kartą per savaitę)</li>
              <li>sūkurinė vonia nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>smiginis nemokamai</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 569€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
  </Container>
);

export default TurkeyPage;
