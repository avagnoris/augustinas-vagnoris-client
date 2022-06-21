import { Box, Container } from '@mui/material';
import React from 'react';
import ShowMoreText from 'react-show-more-text';

const SpainPage: React.FC = () => (
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
        alt="HOVIMA SANTA MARIA"
        src="https://kelioniuakademija.lt/hotel/2674/189098706_3504.jpg"
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
              HOVIMA SANTA MARIA
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Costa Adeje, Tenerifė, Ispanija
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
              Apie 17 km iki pietinio Tenerifės oro uosto, apie 1 km iki miesto centro, apie 300 m iki paplūdimio.
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
              Priklauso HOVIMA viešbučių tinklui.
              Pastatytas 1986 metais, paskutinį kartą atnaujintas 2019 metais.
              Viešbutį sudaro du pastatai. Viso yra 402 numeriai:
              Studio Comfort tipo numeriai (32 m2, maks. 2+1 asm.)
              Studio Superior tipo numeriai (32 m2, maks. 2+1 asm.)
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
              <li>automobilių stovėjimo aikštelė: už papildomą mokestį</li>
              <li>baseinai: 3 (atviri (1 šildomas žiemos sezonu))</li>
              <li>valiutos keitykla</li>
              <li>prie baseino: skėčiai, gultai - nemokamai</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>konferencijų salės: 1 (iki 50 asm.)</li>
              <li>belaidis internetas nemokamai (visoje viešbučio teritorijoje)</li>
              <li>drabužių lyginimo paslauga už papildomą mokestį</li>
              <li>restoranai: 1 (restoranas-bufetas - tarptautinė virtuvė, pusryčiams ir vakarienei)</li>
              <li>vandens kalneliai: 3</li>
              <li>barai: 2 (bare su staliukais, esančiame prie baseino, galima papietauti)</li>
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
              <li>šaldytuvas</li>
              <li>numerių tvarkymas: 5 kartus per savaitę</li>
              <li>paplūdimio rankšluosčiai</li>
              <li> oro kondicionierius: individualus</li>
              <li>terasa</li>
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
              <li>diskoteka nemokamai (6 kartus per savaitę)</li>
              <li>biliardas už papildomą mokestį</li>
              <li>žaidimų automatai už papildomą mokestį</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>gyva muzika nemokamai (1 kartą per savaitę)</li>
              <li>vandens aerobika nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>gyva muzika nemokamai</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 749€
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
        alt="FANABE-COSTA-SUR-Pools"
        src="https://kelioniuakademija.lt/hotel/2657/FANABE-COSTA-SUR-Pools-8_3059.jpg"
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
              GF FANABE
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Costa Adeje, Tenerifė, Ispanija
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
              Apie 20 km iki pietinio Tenerifės oro uosto, apie 500 m iki Fanabe paplūdimio.
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
              Priklauso GF HOTELES viešbučių tinklui.
              Pastatytas 1994 metais, paskutinį kartą atnaujintas 2004 metais.
              Viešbutį sudaro vienas 5-ių aukštų pastatas.
              Viso yra 413 numerių:
              Standard tipo numeriai (40 m2, min. 1+0/maks. 3+0 asm., 1 dvigulė lova arba 2 viengulės lovos, yra galimybė pastatyti papildomai sofą-lovą, vaikiška lovelė pagal užklausimą (nemokamai), vonios kambarys su vonia, balkonas);
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
              <li>barai: 3</li>
              <li>automobilių nuoma</li>
              <li>registratūra (24 valandas)</li>
              <li>suvenyrų parduotuvė</li>
              <li>baseinai: 5 (su gėlu vandeniu, 3 šildomi žiemos sezonu, 2 ant stogo)</li>
              <li>užkandžių baras (užkandžių baras/restoranas prie baseino La Choza)</li>
              <li>kirpykla</li>
              <li>restoranai: 1 (Adeje: švediškas stalas, iki 700 asm.)</li>
              <li>prie baseino: paplūdimio rankšluosčiai užstatas (užstatas)</li>
              <li>interneto kavinė 1 (4 kompiuteriai su kamera)</li>
              <li>terasa, skirta deginimuisi (suaugusiems)</li>
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
              <li>aptarnavimas numeriuose: už papildomą mokestį (09:00-23:00)</li>
              <li>balkonas/terasa</li>
              <li>kosmetinis veidrodis</li>
              <li>patalynės keitimas: 3 kartus per savaitę</li>
              <li>paplūdimio rankšluosčiai</li>
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
              <li>sūkurinė vonia už papildomą mokestį</li>
              <li>petankas nemokamai</li>
              <li>gyva muzika nemokamai</li>
              <li>turkiška pirtis už papildomą mokestį</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>žaidimų kambarys 2</li>
              <li>stalo tenisas nemokamai</li>
              <li>diskoteka 2</li>
              <li>Wellness centras (už papildomą mokestį)</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 779€
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
        alt="sol-principe"
        src="https://kelioniuakademija.lt/hotel/17028/sol-principe-1-354644.jpg"
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
              SOL PRINCIPE
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Malaga, Ispanija
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
              Apie 700 m iki „Playa de la Arena“, apie 33 km pietinio Tenerifės oro uosto.
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
              Priklauso LANDMAR HOTELS viešbučių tinklui.
              Suite Garden tipo numeriai (50 m2, min.1 – maks.4) erdvūs numeriai su atskira svetaine, yra sofa, televizorius, terasa su vaizdu į sodą, oro kondicionierius, vonios kambarys su dušu, plaukų džiovintuvas, makiažo veidrodis
              Suite Ocean View tipo numeriai (50 m2, min.2 – maks.4) erdvūs numeriai su atskira svetaine, yra sofa, televizorius, rašomasis stalas, kavos aparatas, terasa su vaizdu į vandenyną, oro kondicionierius, vonios kambarys su dušu, plaukų džiovintuvas, makiažo veidrodis
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
              <li>a la carte restoranai: 1</li>
              <li>drabužių valymo paslaugo</li>
              <li>prie baseino: skėčiai, gultai, čiužiniai – nemokamai</li>
              <li>belaidis internetas nemokamai</li>
              <li>gydytojo kabinetas</li>
              <li>registratūra</li>
              <li>kirpykla</li>
              <li>baseinai: 6</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>automobilių nuoma</li>
              <li>registratūra</li>
              <li>automobilių stovėjimo aikštelė už papildomą mokestį</li>
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
              <li>balkonas/terasa</li>
              <li>vonios kambarys</li>
              <li>mini baras 1</li>
              <li>seifas numeryje, už papildomą mokestį</li>
              <li>oro kondicionierius: yra</li>
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
              <li>tinklinis </li>
              <li>pramoginiai renginiai </li>
              <li>vandens aerobika</li>
              <li>sauna: už papildomą mokestį</li>
              <li>mini golfas</li>
              <li>treniruoklių salė: nemokamai</li>
              <li>stalo tenisas nemokamai</li>
              <li>futbolas </li>
              <li>gyva muzika nemokamai</li>
              <li>vandens polo</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 809€
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
        alt="costa-adeje-palace"
        src="https://kelioniuakademija.lt/hotel/16889/h10-costa-adeje-palace-352843.jpg"
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
              H10 Costa Adeje Palace
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Costa Adeje, Tenerifė, Ispanija
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
              Apie 30 km iki oro uosto, apie 10 km iki Kosta Adechės pakrantės, apie 200 m iki paplūdimio, apie 500 m iki prekybos centro.
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
              Priklauso RIU HOTELS & RESORTS viešbučių tinklui
              Paskutinį kartą atnaujintas 2020 metais. Viso yra 509 numeriai:
              Standard tipo numeriai (25 m2, maks. 2+0 asm.) 180x200см lova arba dvi 110x200см lovos, sofa svetainėje, palydovinė televizija, kondicionierius, mini šaldytuvas ir balkonas arba terasa.
              Family One Bedroom tipo numeriai (40 m2, maks. 2+2+1/3+0+1 asm.) dvi 110x200 см lovos, svetainė su sofa-lova, palydovinė televizija, kondicionierius, mini šaldytuvas ir balkonas arba terasa.
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
              <li>autobusas iki miesto centro (iki Playa de las Americas 3 kartus per dieną, vietų skaičius yra ribotas, nemokamai)</li>
              <li>barai: 3 (Lounge baras, Atrio baras ir baras prie baseino)</li>
              <li>prie baseino: skėčiai, gultai, čiužiniai - nemokamai)</li>
              <li>restoranai: 2 (pagrindinis restoranas su atvira terasa: tarptautinė virtuvė, švediškas stalas, teminės vakarienės 2 kartus per savaitę; teminis restoranas Playa)</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>uždari baseinai: 1</li>
              <li>belaidis internetas nemokamai (visoje viešbučio teritorijoje)</li>
              <li>baseinas su sūkurine vonia: 2 (1 šildomas žiemos sezonu)</li>
              <li>automobilių stovėjimo aikštelė: nemokamai</li>
              <li>prie baseino: skėčiai, gultai - nemokamai</li>
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
              <li>seifas numeryje, už papildomą mokestį</li>
              <li>balkonas</li>
              <li>telefonas</li>
              <li>oro kondicionierius: yra</li>
              <li>patalynės keitimas: kas antrą dieną</li>
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
              <li>golfas už papildomą mokestį</li>
              <li>porto aikštelė nemokamai (universali)</li>
              <li>futbolas nemokamai</li>
              <li>paplūdimio tinklinis: nemokamai</li>
              <li>tinklinis nemokamai</li>
              <li>gyva muzika nemokamai (1 kartą per savaitę)</li>
              <li>biliardas už papildomą mokestį</li>
              <li>masažas už papildomą mokestį</li>
              <li>gyva muzika 2</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 609€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
  </Container>
);

export default SpainPage;
