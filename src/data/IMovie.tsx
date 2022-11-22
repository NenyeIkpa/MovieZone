export interface IMovie {
adult: boolean,
backdrop_path: string,
genre_ids: number[],
id: number,
original_language: string,
original_title: string,
overview: string,
popularity: number,
poster_path: string,
release_date: string,
title: string,
video: boolean,
vote_average: number,
vote_count: number
}

const DATA = [
    {
    "adult": false,
    "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
    "genre_ids": [
    27,
    53
    ],
    "id": 663712,
    "original_language": "en",
    "original_title": "Terrifier 2",
    "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night. As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
    "popularity": 4620.725,
    "poster_path": "/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg",
    "release_date": "2022-10-06",
    "title": "Terrifier 2",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 128
    },
    {
    "adult": false,
    "backdrop_path": "/d6MhreFdMHONqX3iZlJGCF8UkIt.jpg",
    "genre_ids": [
    28,
    878
    ],
    "id": 436270,
    "original_language": "en",
    "original_title": "Black Adam",
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "popularity": 4416.78,
    "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
    "release_date": "2022-10-19",
    "title": "Black Adam",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 501
    },
    {
    "adult": false,
    "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
    "genre_ids": [
    27,
    53,
    9648
    ],
    "id": 717728,
    "original_language": "en",
    "original_title": "Jeepers Creepers: Reborn",
    "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
    "popularity": 3132.91,
    "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
    "release_date": "2022-09-15",
    "title": "Jeepers Creepers: Reborn",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 358
    },
    {
    "adult": false,
    "backdrop_path": "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
    "genre_ids": [
    28,
    12,
    14
    ],
    "id": 960704,
    "original_language": "ja",
    "original_title": "鋼の錬金術師 完結編 最後の錬成",
    "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
    "popularity": 2697.537,
    "poster_path": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
    "release_date": "2022-06-24",
    "title": "Fullmetal Alchemist: The Final Alchemy",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 101
    },
    {
    "adult": false,
    "backdrop_path": "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
    "genre_ids": [
    27,
    53
    ],
    "id": 616820,
    "original_language": "en",
    "original_title": "Halloween Ends",
    "overview": "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
    "popularity": 2313.949,
    "poster_path": "/kFMntvUmKhvw1uAHXecqqNSFXt.jpg",
    "release_date": "2022-10-12",
    "title": "Halloween Ends",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 684
    },
]