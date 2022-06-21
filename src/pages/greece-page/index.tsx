import { Box, Container } from '@mui/material';
import React from 'react';
import ShowMoreText from 'react-show-more-text';

const GreecePage: React.FC = () => (
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
        alt="sentido-alexandra-beach-resort"
        src="https://kelioniuakademija.lt/hotel/12505/sentido-alexandra-beach-resort-1.jpg"
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
              Alexandra Beach Resort & Spa
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Tsilivi, Zakintas, Graikija
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
              Viešbutis stovi ant kalvos, maždaug už 1 km nuo Tsilivio centro. Atstumas iki parduotuvių, barų ir restoranų – apie 500 m, iki Zakinto oro uosto – apie 8 km, iki Zakinto miesto – apie 6 km, iki autobusų stotelės – apie 500 m.
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
              Oficiali kategorija šalyje - keturios žvaigždutės. Modernus, stilingas, pastatytas 1989 m., iš dalies atnaujintas 2013 m., paskutinė renovacija atlikta 2017–2018 m. (numerių, baseino, treniruoklių salės, SPA). Viešbutyje yra 170 numerių, pagrindinis pastatas (4 aukštų) ir „bungalow“ tipo nameliai (2 aukštų). Pagrindiniame pastate: 2 liftai, erdvus vestibiulis, visą parą dirbanti registratūra.
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
              <li>Restoranas prie baseino – švediškas stalas, tarptautinė virtuvė</li>
              <li>Vegetariški patiekalai</li>
              <li>Vakarienės metu pageidaujama formali apranga (vyrams – ilgos kelnės)</li>
              <li>Restoranas „à la carte“ prie paplūdimio – italų virtuvė</li>
              <li>Baras prie baseino</li>
              <li>automobilių nuoma</li>
              <li>Baras „Blue bar“ ant stogo</li>
              <li>baseinai: 2 (atviri)</li>
              <li>Terasa su vaizdu į jūrą</li>
              <li>Sodas</li>
              <li> barai: 6</li>
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
              <li>Palydovinė televizija</li>
              <li>patalynės keitimas: 3 kartus per savaitę</li>
              <li>Šaldytuvas, kavos / arbatos komplektas</li>
              <li>Vaizdas į jūrą – už papildomą mokestį</li>
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
              <li>Baseinas, netaisyklingos „infinity“ formos, gėlo vandens, apie 260 m², gylis - apie 1,5 m</li>
              <li>Sukūrinė vonia</li>
              <li>Baseinas vaikams, gėlo vandens, apie 16 m², gylis - 0,5 m</li>
              <li>mini golfas nemokamai</li>
              <li>Prie baseino nemokami skėčiai, gultai ir čiužiniai</li>
              <li>Treniruoklių salė</li>
              <li>stalo tenisas nemokamai</li>
              <li>Vakarinė pramoginė programa suaugusiems</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 579€
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
        alt="FLORIDA BLUE BAY"
        src="https://kelioniuakademija.lt/hotel/47/foto005-1_4815.jpg"
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
              FLORIDA BLUE BAY
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Peloponesas, Graikija
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
              Psatopirgo gyvenvietėje, apie 16 km iki Patrų miesto, apie 50 km iki Arakso oro uosto, apie 20 m iki paplūdimio.
              Apie 150 m iki autobusų stotelės.
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
              Paskutinį kartą atnaujintas 2011 metais.
              Viešbutį sudaro vienas pastatas.
              Viso yra 81 numeris:
              Standard room tipo numeriai (pagr. lova – 2 viengulės lovos arba dvigulė, papildomai – viengulė arba išlankstoma lovos, maks. 3+1 asm., 25-30 m2).
              Galima atsiskaityti kreditinėmis kortelėmis: Visa, MasterCard
              Bankomatas: apie 9 km
              Apgyvendinimas su gyvūnais: įmanomas (pagal išankstinį užklausimą, už papildomą mokestį)
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
              <li>gydytojo iškvietimas (už papildomą mokestį)</li>
              <li>skalbykla už papildomą mokestį (pagal užklausimą)</li>
              <li>prie baseino: skėčiai, gultai - nemokamai</li>
              <li>belaidis internetas nemokamai</li>
              <li>baseinai: 1 (atviras, su gėlu vandeniu)</li>
              <li>automobilių stovėjimo aikštelė yra</li>
              <li>belaidis internetas nemokamai ( 15 min. visos viešnagės metu)</li>
              <li>konferencijų salės: 1</li>
              <li>restoranai: 1 (pagrindinis)</li>
              <li>užkandžių baras</li>
              <li>barai: 1</li>
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
              <li>rankšluosčių keitimas: kasdien</li>
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
        alt="ADAM-EVE-HOTEL"
        src="https://kelioniuakademija.lt/hotel/4/881-ADAM-EVE-HOTEL.jpg"
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
              Hellinis
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Šiaurinė (Korfu), Korfu, Graikija
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
              Apie 25 km iki Herakliono oro uosto, apie 2 km iki Chersonisos miestelio, ant kalvos. Apie 2 km iki autobusų stotelės.
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
              Priklauso HERSONISSOS HOTEL GROUP viešbučių tinklui. Pastatytas 1989 metais, paskutinį kartą atnaujintas 2013 metais. Viešbutis įrengtas tradiciniu kretietišku stiliumi. Viešbutį sudaro vienas pagrindinis pastatas ir vasarnamių kompleksas. Viso yra 164 numeriai:
              Double tipo numeriai (su vaizdu į sodą, pagr. lova – 2 viengulės lovos, maks. 2 asm., 18–25 m2).
              Double Sea View tipo numeriai (su vaizdu į jūrą, pagr. lova – 2 viengulės lovos, maks. 2 asm., 18–25 m2).
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
              <li>autobusas iki miesto centro (3 kartus per dieną, Chersoneso mieste, nemokamai)</li>
              <li>SPA centras (Zen Spa centras Hersonissos Maris viešbutyje – nemokami pervežimai)</li>
              <li>belaidis internetas nemokamai</li>
              <li>baseinai: 2 (su gėlu vandeniu)</li>
              <li>užkandžių baras</li>
              <li>restoranai: 1</li>
              <li>barai: 1</li>
              <li>prie baseino: skėčiai, gultai - nemokamai</li>
              <li>barai: 1 (+ užkandžių baras)</li>
              <li>restoranai: 1</li>
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
              <li>mini šaldytuvas</li>
              <li>grindys: kiliminė danga</li>
              <li>mini baras (vanduo papildomas kasdien)</li>
              <li>virdulys (pagal užklausimą, nemokamai)</li>
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
              <li>teniso inventorius </li>
              <li>vandens aerobika </li>
              <li>elektroniniai žaidimai </li>
              <li>sauna: už papildomą mokestį</li>
              <li>treniruoklių salė: nemokamai</li>
              <li>stalo tenisas nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>mini futbolas </li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 709€
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
        alt="EVA BAY HOTEL"
        src="https://kelioniuakademija.lt/hotel/2840/157051475.webp"
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
              EVA BAY HOTEL
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Retimnas, Kreta, Graikija
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
              Apie 75 km iki Herakliono oro uosto, apie 6 km iki Retimno miesto, netoli Platanias miesto, ant jūros kranto. Apie 100 m iki autobusų stotelės.
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
              Pastatytas 1993 metais, paskutinį kartą atnaujintas 2017-2018 metais. Buvo pilnai atnaujintas pagrindinis restoranas - interjeras, baldai ir bufetas.
              Viešbutį sudaro vienas pagrindinis pastatas ir aštuoni 2-jų aukštų pastatai.
              Viso yra 108 numeriai.
              standard room tipo numeriai (pagr. lova – dvigulė lova arba 2 viengulės lovos, papildomai – viengulė lova, 18–25 m2, maks. 3 asm.).
              Yra galimybė sujungti numerius.
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
              <li>SPA centras (išorinis partneris)</li>
              <li>automobilių stovėjimo aikštelė yra</li>
              <li>prie baseino: skėčiai, gultai - nemokamai</li>
              <li>parduotuvės</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>baseinai: 2 (atviri, su gėlu vandeniu)</li>
              <li>belaidis internetas nemokamai (visoje viešbučio teritorijoje)</li>
              <li>vandens kalneliai: 3 (su nusileidimu į jūrą)</li>
              <li>barai: 2</li>
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
              <li>patalynės keitimas: 3 kartus per savaitę</li>
              <li>paplūdimio rankšluosčiai (nemokamai.)</li>
              <li>telefonas</li>
              <li>vonia arba dušas</li>
              <li>balkonas/terasa</li>
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
              <li>stalo tenisas nemokamai</li>
              <li>elektroniniai žaidimai už papildomą mokestį (nuo 09:00 iki 22:00)</li>
              <li>vakariniai renginiai nemokamai (1 kartą per savaitę)</li>
              <li>krepšinis nemokamai</li>
              <li>paplūdimio tinklinis: nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>masažas už papildomą mokestį</li>
              <li>sūkurinė vonia nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>vandens sporto priemonės už papildomą mokestį (paplūdimyje)</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 669€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
  </Container>
);

export default GreecePage;
