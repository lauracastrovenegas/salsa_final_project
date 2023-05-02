import family_tree from './assets/images/family_tree.png'
import protest from './assets/images/protest.jpeg'
import willie_colon from './assets/images/willie_colon.jpeg'
import young_lords from './assets/images/young_lords.jpeg'
import recipe from './assets/images/recipe.png'
import bomba_instruments from './assets/images/bomba_instruments.jpeg'

const data = [
    {
        location: "Miami, FL",
        title: "Salsa, the Dance",
        videoURL: "https://www.youtube.com/embed/arOvJO7H_SQ",
        text: ["This solidworks animation shows the basic steps of salsa. Salsa dancing varies by region, and more experienced dancers add spins, twists, and more complex footwork while subtly communicating non-verbally with their partners. Although salsa originated in Cuba, it spread like wildfire throughout Latin America and the United states, becoming very popular in south Florida as the Cuban population there quickly grew."]
    },
    {
        location: "Midtown, NY",
        title: "Palladium Ballroom Dancers",
        videoURL: "https://www.youtube.com/embed/1wzkELAaXPI",
        text: ["The Palladium Ballroom on 53rd and Broadway is commonly known as the birthplace of modern Latin dancing and the home of the mambo. It was the most popular venue for Latin dance music from 1947-1966. It was frequented by “The Big Three” orchestras– Machito and his Afrocubans, Tito Puente, and Tito Rodriguez. The ballroom facilitated racial and ethnic integration, particularly remarkable in a time of systematic racism.", "Although the mambo was most popular, other dance styles like the cha-cha and the pachanga experienced surges of popularity with the changing times. The concerts and dances here heavily contributed to the worldwide explosion of salsa– even if the style's title was yet to be named.", "Music was evolving because of the jazz from the African Americans, the new melodic influences from the Puerto Ricans, faster tempos from the Dominicans, and the Calypso and newly syncopated rhythms from the Panamanians."]
    },
    {
        location: "Bronx, NY",
        title: "Salsa and Activism in NYC",
        image_texts: [
            { image: protest, text: "When salsa erupted in New York City in the 1970s, the city was laden with bankruptcy, crime, and many low-income/working-class neighborhoods were under economic and social siege. In some of these neighborhoods with large Latino populations– namely El Barrio, the South Bronx, and the Lower East side– salsa music served as a soundtrack for activism and reclamation." }, 
            { image: willie_colon, text: "Salsa musicians of the time would reflect this political climate. Conga player Ray Barretto focused on sociology in New York city and the prevalence of drugs and violence. The cover of trombonist and vocalist Willie Colon’s “La Gran Fuga” is an FBI image– a statement of Colon putting on the persona of a criminal, though simultaneously resonating with NY residents about to hit bankruptcy." }, 
            { image: young_lords, text: "Salsa came to prominence at the same time of the Black Arts Movement, the Nuyorican movement and Puerto Rican nationalist/activist group the Young Lords." }
        ]
    },
    {
        location: "New York, NY",
        title: "NYC Mambo, Boogaloo, and Salsa Family Tree",
        image: family_tree,
        text: ["This family tree displays the major players that fronted the distinct New York City salsa scene and style. While there is controversy on exactly what salsa is and where it originated– Puerto Rico or Cuba– the salsa industry that exploded in the city originated during the Mambo craze of the 1950s.", "Fania Records was the label responsible for the big marketing push that solidified salsa as a genre– a branding idea for dance music based around the Cuban rhythms of son, guaracha, guajira, guaguanco, etc. Cuban critics complained that the term “salsa” was a way to avoid saying the word Cuba. The label was founded in 1964 by Italian-American Jerry Masucci and Johnny Pacheco, Fania’s first artist and music director.", "The Fania All-Stars were founded in 1968 under Pacheco’s direction featuring Ray Baretto, Joe Bataan, Willie Colón, Hector Lavoe, Mongo Santamaría, Pete “El Conde” Rodríguez, and others who would be added later– including “Queen of Salsa” Celia Cruz who became the only first-tier Cuban star of the NY salsa boom with Fania. The contributions made by these musicians defined the distinct style of salsa in NY–  capitalizing off of the jazz background of many of the members, replacing the violins of a charanga to the trumpets of a conjunto, exploring Afro-Cuban and Puerto Rican heritages, etc."]
    },
    {
        location: "New York, NY",
        title: "Interview: Jorge Cepeda",
        videoURL: "https://www.youtube.com/embed/11S8cAVXJ00",
    },
    {
        location: "Havana, Cuba",
        title: "Interview: Alexandra",
        videoURL: "https://www.youtube.com/embed/GlwWiXMSZug",
    },
    {
        location: "Cuba",
        title: "Abuela's Flan Recipe",
        text: ["Gladys Pandiello (born and raised in Cuba) was well known for her superior flan recipe, and passed it down to her family and close friends before passing away in 2021. Flan is a very popular dessert in many Latin American countries, and after many years of practice, Gladys’s flan surpassed all others in taste and texture. In her interview, Gladys’s granddaughter Alexandra Quintana recalled her vivid memories of going to her abuela’s house where music was always playing from the radio and food was always readily served. In memory of her, we include her flan recipe here. En paz descance Doña Gladys."],
        image: recipe,
    },
    {
        location: "Cuba",
        title: "Patria Y Vida",
        videoURL: "https://www.youtube.com/embed/pP9Bto5lOEQ",
        text: ["In more recent years, Latin music is still used as an aid and catalyst in social movements. 2021 saw the largest uprising in recent Cuban history, traversing the Caribbean to reach both south Florida and Cuba. The unifying cry rising above the noise was “patria y vida” – homeland and life.","The phrase stems from hip-hop song “Patria y Vida,” a song that was the product of a collaboration between the duo of Gente de Zona (Alexander Delgado and Randy Malcom), Yotuel Romero (who founded cuban band Orishas), and Decemer Bueno.","The lyrics are reclaiming a slogan made popular at the birth of the Cuban revolution, “Patria o Muerte” (Homeland or Death). In a country with restricted access to the outside world, musicians imbue their art with messages crucial to the movement.","The song reflects the perspective of the new generation of Cubans and Cuban-Americans, facing the aftermath of the Cuban revolution and highlighting government hypocrisy. The refrain concluding the song simultaneously references the culturally significant game of dominoes and this generational shift. “(It's over) you five nine, me double twos” alludes to the year Castro came to power (‘59) and the year 2022, hopeful for a new future for Cuba."]
    },
    {
        location: "Puerto Rico",
        title: "Salsa en Las Calles de Puerto Rico",
        videoURL: "https://www.youtube.com/embed/2FvCtTuJrrU"
    },
    {
        location: "Mayaguez, Puerto Rico",
        title: "Bomba",
        image: bomba_instruments,
        text: ["Bomba is a style of music and dance that originated in and is emblematic of Puerto Rico. The practice formed as a result of West African enslaved people – who could trace their heritage to the Ashanti people of Ghana – who worked in sugar plantations along the western coast during the colonial period. The genre was a soundtrack to feelings of sadness, anger, and resistance in dance gatherings called Bailes de Bomba. These gatherings often served as ceremonies or even to plan rebellions.","A larger drum called a buleador served to keep the steady beat. A high-pitched rum, or subidor, was responsible for improvising above the large drum and marking the movements of dancers, putting them in conversation with the instruments. The cuá and maraca added additional rhythmic layers. Dancers challenge the subidor with paseos (promenades) and piquetes (accents), the improvised steps. The style encompasses more than 16 rhythmic styles with influence from African, European, French creole, and neighboring Caribbean origins.","Now, bomba is often used both on the island and in the U.S. to condemn racism. Puerto Rican artist Maria Isa wrote “Como Duele” to honor George Floyd’s life, representative of the significance of bomba during the height of the Black Lives Matter movement."]
    },
    {
        location: "San Juan, Puerto Rico",
        title: "Cuatro",
        embed: <iframe name="Smithsonian Voyager" src="https://3d-api.si.edu/voyager/3d_package:b6befa3e-d257-4344-b50d-2d158aefdb76" width="100%" height="450" allow="xr; xr-spatial-tracking; fullscreen"></iframe>,
        text: ["The cuatro originated in Puerto Rico, and has five double-strings. It is mainly used to play música jíbara, a country music genre, though it is often featured in plena music, associated with dance and political protest."]
    },
    {
        location: "Santo Domingo, D.R.",
        title: "Doble Sentido in Bachata",
        videoURL: "https://www.youtube.com/embed/ija-HYsiPgM",
        text: ["Sexual double entendre, or doble sentido, has become very popular in Dominican bachata music, with even popular children’s songs like Arroz con Leche having provocative hidden meanings. A prime example of this is “El Salón” by Julio Angel (1982), which at the surface appears to be about women getting their hair done at a salon. Digging deeper, when the song refers to fixing a woman’s “pajón,” or messy hair, it isn’t referring to the hair on her head. The song also includes lyrics such as the salon opening at night and bringing “more than 40 women.” The lyric such as “peine” which translates to comb, sounds similar to the spanish word for penis, and the lyric “cuello,” meaning neck, sounds like “culo”. Many popular bachata artists in the late 1980’s used doble sentido, contributing to the perception of bachata as a more street-like style."]
    },
    {
        location: "Santiago, D.R.",
        title: "Perico Ripiao — Traditional Merengue",
        videoURL: "https://www.youtube.com/embed/kmzJnCzjTZE",
        text: ["Perico Ripiao, or Merengue Tipico, is considered the typical type of merengue played, the country’s national music style, and is associated with the rural Cibao area. The genre first appeared in recorded history in the 1840s when moralists attempted to ban this “country music”. It is played with three main instruments– the guira, said to have originated from the Taíno natives of the DR, the tambora, a two-headed drum of African origin, and the accordion, said to have come from trade with the Germans. Modern perico ripiao has added a saxophone and bass guitar.","Legend says that it was called Perico Ripiao, meaning ripped or plucked parrot, after a brothel where the music was originally played. The genre was often under criticism in part because of the sensual movements of the associated dance and provocative lyrics, though mostly because of associations with the lower/working-class areas where the music originated.","Important figure Francisco “Ñico” Lora is credited with popularizing the accordion at the start of the 20th century, and claims to have composed “thousands” of merengues. He is known as something of a musical journalist, with songs commenting on events like the Cuban independence, World War I, and the US occupation of the DR.","During the reign of dictator Rafael Trujillo (1930-1961), the genre received an elevation of status as he decided the rural style would serve as a Dominican national symbol. He altered the genre, resulting in numerous merengues composed in his honor and replacing the accordion with a horn section in a new Orquesta Merengue style."]
    },
    {
        location: "D.R.",
        title: "Interview: Marisol",
        videoURL: "https://www.youtube.com/embed/dWe0EU8WU3U"
    },
    {
        location: "Santiago, D.R.",
        title: "Interview: Greg",
        videoURL: "https://www.youtube.com/embed/LPmJwHT8cU4"
    },
    {
        location: "Colombia",
        title: "Interview: Claudia",
        videoURL: "https://www.youtube.com/embed/2rG8WjXJTW8",
    },
    {
        location: "Cali, Colombia",
        title: "The World Capital of Salsa - Cali, Colombia",
        videoURL: "https://www.youtube.com/embed/voVLsVsocrc"
    }
]

export default data;