import Realm from 'realm';


//define object model
export const MovieSchema = {
    name: "Movies",
    properties: {
      _id: "int",
      title: "string",
      releaseYear: "string?",
      overview: "string",
      posterPath: "string",
    },
    primaryKey: "_id",
  };

  //open realm
  const realm = await Realm.open({
    path: "movieszone",
    schema: [MovieSchema],
  });
  