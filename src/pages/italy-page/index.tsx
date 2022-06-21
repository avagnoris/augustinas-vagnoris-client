import { Box, Container } from '@mui/material';
import React from 'react';
import ShowMoreText from 'react-show-more-text';

const ItalyPage: React.FC = () => (
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
        alt="residence-sole-mare"
        src="https://kelioniuakademija.lt/hotel/16794/residence-sole-mare-351791.jpg"
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
              Residence Sole Mare
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Tirėnų jūros pakrantė (Kalabrija), Kalabrija, Italija
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
              Viešbutis įsikurės prie pat jūros kranto, gamtos apsuptijė, yra citrusinių medžių parkas. Mėgstantiens linksmai praleisti laika teritorijojė yra barai ir restoranai. Viešbutis turį patogų prieimą į krantą. Tinka kaip poroms taip ir visai šeimai
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
              Iš dalies renovuota 2017-2018 m. (visi kambariai vilose kompleksą sudaro pagrindinis pastatas ir vilos kambarių skaičius – 642
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
              <li>Pagrindiniai restoranai – 2</li>
              <li>Ala carte restoranai – 2 (mokama)</li>
              <li>Barai – 2</li>
              <li>dietinis meniu</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>Gultai prie baseino</li>
              <li>belaidis internetas nemokamai (visoje viešbučio teritorijoje)</li>
              <li>Paplūdimio rankšluosčiai paplūdimyje (mokama)</li>
              <li>Skėčiai nuo saulės prie baseino</li>
              <li>vandens kalneliai: 3</li>
              <li>Viešbučio kategorija šalyje – 4</li>
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
              <li>Mini baras (mokama)</li>
              <li>Oro kondicionierius (vietinis)</li>
              <li>Bidė</li>
              <li>Tiesioginis vaizdas į jūrą</li>
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
              <li>Daugiafunkcinė aikštelė</li>
              <li>teniso inventorius nemokamai</li>
              <li>burlenčių sportas už papildomą mokestį (su licencija</li>
              <li>mini golfas nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>Stalo tenisas</li>
              <li>stalo tenisas nemokamai</li>
              <li>Vandens slidės (mokama)</li>
              <li>Burlentės</li>
              <li>Spa centras</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 599€
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
        alt="Hotel Bepy"
        src="https://kelioniuakademija.lt/hotel/18553/bepy-383622.jpg"
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
              Bepy
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Madonna di Campiglio, Slidinėjimas Italijoje (per Bergamą), Italija
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
              Labai gražus, švarus viešbutis, įsikūręs apie 300 m iki Džustino kurorto centro, apie 1 km iki Pincolo kurorto centro, netoli iki kalnų ir upės. Itin paslaugus, mandagus ir draugiškas personalas. Tinka norintiems atpalaiduojančių atostogų kalnuose.
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
              Renovuota 2018 m. Kambarių skaičius – 2, Atstumas iki kurorto centro yra apie 300 m (Džustino), 1 km (Pincolo)
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
              <li>Slidinėjimo inventoriaus kambarys</li>
              <li>konferencijų salės: 3 (88-350 asm.)</li>
              <li>Garažas (mokama)i</li>
              <li>skalbykla už papildomą mokestį</li>
              <li>Automobilių stovėjimo aikštelė</li>
              <li>Bevielis internetas</li>
              <li>TV kambarys</li>
              <li>restoranai: 1 (pagrindinis)</li>
              <li>Apartamentai oficialios kategorijos šalyje neturi</li>
              <li>SPA centras</li>
              <li>Skėčiai nuo saulės prie baseino</li>
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
              <li>Dušas</li>
              <li>Kambario plotas apie 26 kv.m</li>
              <li>Televizorius</li>
              <li>patalynės keitimas: 3 kartus per savaitę</li>
              <li>Virtuvėlė</li>
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
              Kaina nuo 479€
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
        alt="Hotel Club Torre Marino"
        src="https://kelioniuakademija.lt/hotel/18115/torre6.jpg"
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
              Hotel Club Torre Marino
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >
              Tirėnų jūros pakrantė (Kalabrija), Kalabrija, Italija
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
              Puikus viešbutis ant jūros kranto su nuosavu paplūdimiu, kuriame yra nemokami gultai, skėčiai, taip pat veikia baras. Viešbučio svečiams siūloma atsigaivinti lauko baseine, žaisti stalo tenisą arba mini futbolą. Vaikams įrengtas vaikų klubas, žaidimų aikštelė.
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
              Renovuota 2009 m. Kompleksą sudaro pagrindinis pastatas ir vilos, kambarių skaičius – 50
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
              <li>SPA centras</li>
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
        alt="ALBATROS RESIDENCE"
        src="https://kelioniuakademija.lt/hotel/14808/837973650.jpeg"
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
              ALBATROS RESIDENCE
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main', fontSize: 22, textAlign: 'center',
              }}
            >

              Tirėnų jūros pakrantė (Kalabrija), Kalabrija, Italija
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
              Viešbutis įsikūręs viešbučių kvartale, Lagano centre su parduotuvėmis, barais ir diskotekomis. Atstumas iki Zakinto miesto – apie 8 km. Atstumas iki Zakinto oro uosto – apie 7 km. Atstumas iki autobusų stotelės – apie 100 m (kelionės į Zakintą kaina – apie 2 Eur).
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
              Oficiali kategorija šalyje - keturios žvaigždutės. Elegantiškas, stilingas, pastatytas 1995 m., visiškai atnaujintas 2007 ir 2018 m. (aukštesnės („Superior“) klasės numeriai). Viešbutyje yra 78 kambariai, 2 pastatai, 3 aukštai, 1 liftas, erdvus vestibiulis, visą parą veikianti registratūra.
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
              <li>Baras prie baseino</li>
              <li>Baras vestibiulyje (už papildomą mokestį)</li>
              <li>parduotuvės</li>
              <li>Restoranas prie baseino – švediškas stalas</li>
              <li>drabužių skalbimo paslaugos</li>
              <li>uždari baseinai: 1</li>
              <li>Belaidis internetas</li>
              <li>vandens kalneliai: 3 (su nusileidimu į jūrą)</li>
              <li>Valiutų keitykla</li>
              <li>SPA centras</li>
              <li>Terasa su vaizdu į kalnus</li>
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
              <li>Numerio plotas – apie 22–30 m²</li>
              <li>Kambarys stilingas</li>
              <li>telefonas</li>
              <li>Vonios kambarys (vonia arba dušas, tualetas, plaukų džiovintuvas)</li>
              <li>Vaizdas į sodą</li>
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
              <li>Lagano paplūdimys,</li>
              <li>buriavimo pamokos nemokamai (grupiniai)</li>
              <li>Stalo tenisas</li>
              <li>Biliardas</li>
              <li>paplūdimio tinklinis: nemokamai</li>
              <li>teniso kortas nemokamai (su betono danga)</li>
              <li>gyva muzika nemokamai (1 kartą per savaitę)</li>
              <li>sūkurinė vonia nemokamai</li>
              <li>pramoginiai renginiai nemokamai</li>
              <li>SPA centras (hidroterapija, masažai)</li>
            </Box>
            <Box
              component="span"
              sx={{
                textAlign: 'center', fontSize: 22, color: 'white',
              }}
            >
              Kaina nuo 729€
            </Box>
          </Box>
        </ShowMoreText>
      </Box>
    </Box>
  </Container>
);

export default ItalyPage;
