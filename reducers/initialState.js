/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule initialState
 */

const baseInitialState = {
  item: {},
  items: {},
  list: [],
  fetchedList: false,
  isFetching: false,
  didInvalidate: false,
  pageNumber: 0
};

const initialState = {
  emails: Object.assign({}, baseInitialState, {
    list: [
      {
        _id: 100000,
        from: "Stuart Stone",
        from_email: "nisi.nibh@etmagna.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-11-03T17:35:12-08:00",
        subject: "dui. Cum sociis",
        excerpt: "quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus",
        favorite: "0",
        read: "0",
        body: "eget",
        folder: "TRASH"
      },
      {
        _id: 100001,
        from: "Leonard Lancaster",
        from_email: "Sed.eu@quislectus.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-01-31T22:44:40-08:00",
        subject: "Pellentesque habitant morbi",
        excerpt:
          "Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod",
        favorite: "0",
        read: "0",
        body: "dui.",
        folder: "JUNK"
      },
      {
        _id: 100002,
        from: "Palmer Trevino",
        from_email: "Nunc@dignissimmagna.co.uk",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-09-21T22:13:04-07:00",
        subject: "non ante bibendum ullamcorper. Duis",
        excerpt:
          "Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
        favorite: "0",
        read: "0",
        body: "congue",
        folder: "JUNK"
      },
      {
        _id: 100003,
        from: "Vance Sargent",
        from_email: "purus@interdumliberodui.edu",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-11-25T14:15:05-08:00",
        subject: "sed dolor. Fusce mi lorem, vehicula",
        excerpt:
          "lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris.",
        favorite: "0",
        read: "0",
        body: "Cum",
        folder: "JUNK"
      },
      {
        _id: 100004,
        from: "Hayden Burke",
        from_email: "consectetuer.cursus@egetipsumSuspendisse.net",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-04-23T18:05:43-07:00",
        subject: "Duis at",
        excerpt: "semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem",
        favorite: "0",
        read: "0",
        body: "pede",
        folder: "JUNK"
      },
      {
        _id: 100005,
        from: "Dominic Delaney",
        from_email: "vel@vulputate.edu",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-09-25T16:41:10-07:00",
        subject: "purus. Maecenas libero est, congue a,",
        excerpt: "nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus.",
        favorite: "0",
        read: "0",
        body: "dictum",
        folder: "SENT"
      },
      {
        _id: 100006,
        from: "Richard Hale",
        from_email: "aliquet.nec@nuncsitamet.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-10-26T17:19:41-07:00",
        subject: "Suspendisse commodo tincidunt nibh. Phasellus nulla.",
        excerpt: "dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce",
        favorite: "0",
        read: "0",
        body: "egestas",
        folder: "SENT"
      },
      {
        _id: 100007,
        from: "Isaiah Neal",
        from_email: "Etiam.ligula@Nunccommodoauctor.ca",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-01-19T08:00:12-08:00",
        subject: "quam a felis ullamcorper",
        excerpt:
          "primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt.",
        favorite: "0",
        read: "0",
        body: "odio",
        folder: "TRASH"
      },
      {
        _id: 100008,
        from: "Baker Little",
        from_email: "sapien@Naminterdumenim.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-03-06T09:25:24-08:00",
        subject: "vel, mauris.",
        excerpt:
          "fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit",
        favorite: "0",
        read: "0",
        body: "Nunc",
        folder: "JUNK"
      },
      {
        _id: 100009,
        from: "Tate Acevedo",
        from_email: "natoque.penatibus.et@afelis.com",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-09-13T08:49:49-07:00",
        subject: "dolor sit amet, consectetuer adipiscing",
        excerpt:
          "ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a",
        favorite: "0",
        read: "0",
        body: "ornare,",
        folder: "OUTBOX"
      },
      {
        _id: 100010,
        from: "Forrest Koch",
        from_email: "parturient.montes.nascetur@felisorciadipiscing.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-10-12T04:03:58-07:00",
        subject: "cursus non,",
        excerpt:
          "ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante",
        favorite: "0",
        read: "0",
        body: "Nulla",
        folder: "SENT"
      },
      {
        _id: 100011,
        from: "Gray Perez",
        from_email: "molestie.dapibus@faucibusleo.net",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-08-24T06:51:41-07:00",
        subject: "metus vitae velit egestas lacinia.",
        excerpt: "pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        favorite: "0",
        read: "0",
        body: "libero.",
        folder: "JUNK"
      },
      {
        _id: 100012,
        from: "Hilel Acosta",
        from_email: "facilisi.Sed.neque@nibhenim.com",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2015-12-26T13:29:02-08:00",
        subject: "ullamcorper, nisl arcu iaculis enim,",
        excerpt:
          "quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in",
        favorite: "0",
        read: "0",
        body: "augue.",
        folder: "SENT"
      },
      {
        _id: 100013,
        from: "Brady Cotton",
        from_email: "urna.justo.faucibus@at.ca",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-03-01T23:01:30-08:00",
        subject: "Cras eu tellus eu augue porttitor",
        excerpt:
          "auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis",
        favorite: "0",
        read: "0",
        body: "tellus",
        folder: "JUNK"
      },
      {
        _id: 100014,
        from: "Akeem Hinton",
        from_email: "Nunc.commodo.auctor@vitaevelitegestas.org",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-12-06T03:04:54-08:00",
        subject: "sagittis semper. Nam tempor diam",
        excerpt:
          "dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor",
        favorite: "0",
        read: "0",
        body: "Curabitur",
        folder: "OUTBOX"
      },
      {
        _id: 100015,
        from: "Hyatt Casey",
        from_email: "Sed.nulla@Donecest.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-02-02T08:46:53-08:00",
        subject: "dignissim magna a",
        excerpt: "nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
        favorite: "0",
        read: "0",
        body: "magna",
        folder: "INBOX"
      },
      {
        _id: 100016,
        from: "Abdul Dorsey",
        from_email: "ridiculus@semutcursus.co.uk",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-12-04T09:18:31-08:00",
        subject: "vehicula aliquet libero. Integer in magna.",
        excerpt:
          "lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis,",
        favorite: "0",
        read: "0",
        body: "luctus.",
        folder: "TRASH"
      },
      {
        _id: 100017,
        from: "Ray Byers",
        from_email: "odio@volutpatnunc.org",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-07-23T22:15:10-07:00",
        subject: "turpis. Nulla aliquet. Proin",
        excerpt:
          "enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum",
        favorite: "0",
        read: "0",
        body: "est",
        folder: "OUTBOX"
      },
      {
        _id: 100018,
        from: "Len Wood",
        from_email: "Mauris@faucibusorci.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-11-16T04:13:15-08:00",
        subject: "libero. Integer in magna.",
        excerpt:
          "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
        favorite: "0",
        read: "0",
        body: "ac",
        folder: "OUTBOX"
      },
      {
        _id: 100019,
        from: "Rashad Mann",
        from_email: "et.magnis@maurisblandit.org",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-03-19T06:21:09-07:00",
        subject: "ipsum nunc id enim.",
        excerpt:
          "Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc",
        favorite: "0",
        read: "0",
        body: "quam",
        folder: "TRASH"
      },
      {
        _id: 100020,
        from: "Amos Greene",
        from_email: "auctor@hendreritneque.net",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-09-23T07:22:00-07:00",
        subject: "Nam nulla",
        excerpt:
          "Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros.",
        favorite: "0",
        read: "0",
        body: "enim",
        folder: "TRASH"
      },
      {
        _id: 100021,
        from: "Kennedy James",
        from_email: "Aenean.euismod.mauris@eu.edu",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-01-09T07:50:17-08:00",
        subject: "dui, in sodales",
        excerpt:
          "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor.",
        favorite: "0",
        read: "0",
        body: "velit",
        folder: "OUTBOX"
      },
      {
        _id: 100022,
        from: "Zahir Macdonald",
        from_email: "Nunc@Proin.net",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-05-14T10:56:57-07:00",
        subject: "lacus. Cras interdum. Nunc sollicitudin commodo",
        excerpt:
          "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit",
        favorite: "0",
        read: "0",
        body: "a",
        folder: "INBOX"
      },
      {
        _id: 100023,
        from: "Barry Morgan",
        from_email: "tristique@SuspendisseeleifendCras.edu",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-04-01T01:29:11-07:00",
        subject: "sem eget massa. Suspendisse eleifend. Cras",
        excerpt: "egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non,",
        favorite: "0",
        read: "0",
        body: "nulla.",
        folder: "JUNK"
      },
      {
        _id: 100024,
        from: "Rudyard Santos",
        from_email: "sapien.Aenean@Donec.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-08-02T07:13:23-07:00",
        subject: "sapien, cursus",
        excerpt: "In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante",
        favorite: "0",
        read: "0",
        body: "augue",
        folder: "INBOX"
      },
      {
        _id: 100025,
        from: "Arthur Perry",
        from_email: "ultrices.sit.amet@risus.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-06-05T22:03:38-07:00",
        subject: "ullamcorper, velit in",
        excerpt: "eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor",
        favorite: "0",
        read: "0",
        body: "aliquet.",
        folder: "OUTBOX"
      },
      {
        _id: 100026,
        from: "Leonard Hatfield",
        from_email: "netus.et.malesuada@quis.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-08-20T19:03:11-07:00",
        subject: "eleifend vitae, erat. Vivamus nisi.",
        excerpt: "leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit,",
        favorite: "0",
        read: "0",
        body: "magna.",
        folder: "INBOX"
      },
      {
        _id: 100027,
        from: "Kelly Vasquez",
        from_email: "enim.Etiam.imperdiet@laciniaatiaculis.edu",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-10-15T23:34:47-07:00",
        subject: "ornare, lectus ante",
        excerpt: "ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit",
        favorite: "0",
        read: "0",
        body: "consectetuer,",
        folder: "TRASH"
      },
      {
        _id: 100028,
        from: "Solomon Best",
        from_email: "risus@nonmassanon.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-12-22T09:06:26-08:00",
        subject: "eros turpis non enim. Mauris quis",
        excerpt: "egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere",
        favorite: "0",
        read: "0",
        body: "tempor",
        folder: "OUTBOX"
      },
      {
        _id: 100029,
        from: "Lance Mccoy",
        from_email: "turpis.egestas@nisiCumsociis.edu",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-03-13T03:22:34-07:00",
        subject: "consectetuer euismod est",
        excerpt: "Donec tincidunt. Donec vitae erat vel pede blandit congue. In",
        favorite: "0",
        read: "0",
        body: "et",
        folder: "TRASH"
      },
      {
        _id: 100030,
        from: "Edan Rush",
        from_email: "sed@Nullatempor.net",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-06-12T10:57:28-07:00",
        subject: "tincidunt dui",
        excerpt:
          "non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis",
        favorite: "0",
        read: "0",
        body: "purus",
        folder: "SENT"
      },
      {
        _id: 100031,
        from: "Mohammad Rowland",
        from_email: "mauris@maurissit.com",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-07-02T03:09:37-07:00",
        subject: "ipsum. Suspendisse non leo. Vivamus nibh",
        excerpt: "urna justo faucibus lectus, a sollicitudin orci sem eget massa.",
        favorite: "0",
        read: "0",
        body: "ac",
        folder: "JUNK"
      },
      {
        _id: 100032,
        from: "Ross Stafford",
        from_email: "nonummy.ultricies@sollicitudinamalesuada.ca",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-04-29T21:29:06-07:00",
        subject: "interdum. Sed auctor",
        excerpt:
          "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris",
        favorite: "0",
        read: "0",
        body: "Donec",
        folder: "OUTBOX"
      },
      {
        _id: 100033,
        from: "Isaiah Roberson",
        from_email: "velit@egetvariusultrices.org",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-07-09T20:54:40-07:00",
        subject: "ut eros non enim",
        excerpt:
          "Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer",
        favorite: "0",
        read: "0",
        body: "orci",
        folder: "JUNK"
      },
      {
        _id: 100034,
        from: "Baker Fowler",
        from_email: "dapibus@et.edu",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-07-16T22:01:05-07:00",
        subject: "elementum, dui",
        excerpt:
          "ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu",
        favorite: "0",
        read: "0",
        body: "turpis",
        folder: "OUTBOX"
      },
      {
        _id: 100035,
        from: "Brent Spence",
        from_email: "lacus.pede@non.co.uk",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-01-21T11:54:10-08:00",
        subject: "Duis sit amet diam eu dolor",
        excerpt:
          "nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis",
        favorite: "0",
        read: "0",
        body: "auctor",
        folder: "INBOX"
      },
      {
        _id: 100036,
        from: "Damian Stevens",
        from_email: "molestie.dapibus@nasceturridiculus.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-07-25T02:57:59-07:00",
        subject: "lorem fringilla",
        excerpt: "ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum.",
        favorite: "0",
        read: "0",
        body: "Nullam",
        folder: "INBOX"
      },
      {
        _id: 100037,
        from: "Elmo Vega",
        from_email: "dui.nec@montesnascetur.co.uk",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-08-26T07:01:13-07:00",
        subject: "nec, malesuada",
        excerpt: "orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu,",
        favorite: "0",
        read: "0",
        body: "vel,",
        folder: "JUNK"
      },
      {
        _id: 100038,
        from: "Knox Shannon",
        from_email: "tortor.Integer@sitametornare.edu",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2015-11-24T00:29:57-08:00",
        subject: "erat eget ipsum. Suspendisse",
        excerpt:
          "pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi.",
        favorite: "0",
        read: "0",
        body: "imperdiet,",
        folder: "OUTBOX"
      },
      {
        _id: 100039,
        from: "Dorian Salas",
        from_email: "sed.est.Nunc@nuncullamcorpereu.net",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-02-12T02:33:34-08:00",
        subject: "sagittis. Nullam",
        excerpt: "urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum",
        favorite: "0",
        read: "0",
        body: "massa",
        folder: "TRASH"
      },
      {
        _id: 100040,
        from: "Elton Clemons",
        from_email: "pharetra@cursus.net",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-10-24T07:42:28-07:00",
        subject: "neque venenatis",
        excerpt: "vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non",
        favorite: "0",
        read: "0",
        body: "semper",
        folder: "JUNK"
      },
      {
        _id: 100041,
        from: "Malachi Neal",
        from_email: "adipiscing@tellus.org",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-08-09T03:45:14-07:00",
        subject: "tempus risus. Donec egestas.",
        excerpt:
          "elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa.",
        favorite: "0",
        read: "0",
        body: "Fusce",
        folder: "INBOX"
      },
      {
        _id: 100042,
        from: "Slade Long",
        from_email: "massa@vitaeposuereat.edu",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-02-23T14:51:11-08:00",
        subject: "fringilla, porttitor",
        excerpt:
          "vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,",
        favorite: "0",
        read: "0",
        body: "vulputate,",
        folder: "INBOX"
      },
      {
        _id: 100043,
        from: "Leonard Leach",
        from_email: "Nulla@Curabitur.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-12-06T05:22:23-08:00",
        subject: "Nullam velit dui, semper et,",
        excerpt:
          "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt",
        favorite: "0",
        read: "0",
        body: "aliquet",
        folder: "INBOX"
      },
      {
        _id: 100044,
        from: "Kadeem Hahn",
        from_email: "vulputate.lacus@Aliquam.net",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-12-17T03:41:45-08:00",
        subject: "mi. Duis risus",
        excerpt:
          "lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat",
        favorite: "0",
        read: "0",
        body: "feugiat",
        folder: "SENT"
      },
      {
        _id: 100045,
        from: "Walter Melton",
        from_email: "eros.Nam@malesuada.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-09-04T02:49:00-07:00",
        subject: "Aliquam auctor, velit eget",
        excerpt: "mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi",
        favorite: "0",
        read: "0",
        body: "faucibus",
        folder: "OUTBOX"
      },
      {
        _id: 100046,
        from: "Jackson Battle",
        from_email: "ac@magnaa.net",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-11-18T21:49:55-08:00",
        subject: "tristique neque venenatis lacus. Etiam",
        excerpt:
          "vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus",
        favorite: "0",
        read: "0",
        body: "Proin",
        folder: "SENT"
      },
      {
        _id: 100047,
        from: "Reuben Oconnor",
        from_email: "Proin.mi.Aliquam@pharetra.net",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-01-11T22:01:56-08:00",
        subject: "in, tempus eu,",
        excerpt:
          "ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi",
        favorite: "0",
        read: "0",
        body: "In",
        folder: "TRASH"
      },
      {
        _id: 100048,
        from: "Preston Johnston",
        from_email: "a.felis@sollicitudin.edu",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-10-30T08:19:29-07:00",
        subject: "nec ligula",
        excerpt: "Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim,",
        favorite: "0",
        read: "0",
        body: "ut",
        folder: "JUNK"
      },
      {
        _id: 100049,
        from: "Amal Vang",
        from_email: "commodo.at.libero@necmaurisblandit.ca",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-11-18T16:25:36-08:00",
        subject: "Integer vitae nibh.",
        excerpt: "non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor",
        favorite: "0",
        read: "0",
        body: "Donec",
        folder: "INBOX"
      },
      {
        _id: 100050,
        from: "Cullen Parks",
        from_email: "nisi@nuncsedpede.edu",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-05-23T00:31:29-07:00",
        subject: "nec, euismod in,",
        excerpt:
          "elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales",
        favorite: "0",
        read: "0",
        body: "id,",
        folder: "INBOX"
      },
      {
        _id: 100051,
        from: "Judah Avery",
        from_email: "Proin.sed@orcisemeget.ca",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2015-11-18T10:16:45-08:00",
        subject: "mauris eu elit. Nulla facilisi.",
        excerpt:
          "convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis",
        favorite: "0",
        read: "0",
        body: "Donec",
        folder: "OUTBOX"
      },
      {
        _id: 100052,
        from: "Hu Malone",
        from_email: "accumsan.convallis@eget.edu",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-09-11T00:34:59-07:00",
        subject: "id, blandit at, nisi. Cum sociis",
        excerpt:
          "at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        favorite: "0",
        read: "0",
        body: "rhoncus.",
        folder: "SENT"
      },
      {
        _id: 100053,
        from: "Ethan Mccoy",
        from_email: "fermentum.risus@dolorsit.ca",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-11-27T12:20:21-08:00",
        subject: "nec, euismod",
        excerpt: "nibh enim, gravida sit amet, dapibus id, blandit at, nisi.",
        favorite: "0",
        read: "0",
        body: "libero.",
        folder: "JUNK"
      },
      {
        _id: 100054,
        from: "Mark Bell",
        from_email: "montes.nascetur@utnisia.ca",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-08-30T08:02:33-07:00",
        subject: "metus. In nec orci. Donec nibh.",
        excerpt:
          "a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis,",
        favorite: "0",
        read: "0",
        body: "porttitor",
        folder: "SENT"
      },
      {
        _id: 100055,
        from: "Lamar Oneil",
        from_email: "gravida.sit@in.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-02-06T08:07:15-08:00",
        subject: "natoque penatibus et magnis",
        excerpt: "Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis.",
        favorite: "0",
        read: "0",
        body: "euismod",
        folder: "INBOX"
      },
      {
        _id: 100056,
        from: "Zahir Case",
        from_email: "senectus.et.netus@facilisis.edu",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2015-11-16T19:42:30-08:00",
        subject: "non ante bibendum ullamcorper.",
        excerpt: "auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan",
        favorite: "0",
        read: "0",
        body: "Donec",
        folder: "JUNK"
      },
      {
        _id: 100057,
        from: "Dieter Snider",
        from_email: "tellus.lorem@aliquetdiam.edu",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2015-10-07T07:50:32-07:00",
        subject: "leo. Morbi neque tellus,",
        excerpt:
          "Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur",
        favorite: "0",
        read: "0",
        body: "viverra.",
        folder: "INBOX"
      },
      {
        _id: 100058,
        from: "Noah Sullivan",
        from_email: "vitae.diam.Proin@pellentesque.co.uk",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2015-12-18T12:48:38-08:00",
        subject: "massa non",
        excerpt:
          "neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper,",
        favorite: "0",
        read: "0",
        body: "dictum",
        folder: "JUNK"
      },
      {
        _id: 100059,
        from: "Trevor Campos",
        from_email: "sapien.cursus@lacus.co.uk",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-03-11T15:41:47-08:00",
        subject: "faucibus leo, in lobortis",
        excerpt: "tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus",
        favorite: "0",
        read: "0",
        body: "convallis",
        folder: "OUTBOX"
      },
      {
        _id: 100060,
        from: "Patrick Walton",
        from_email: "imperdiet@fermentum.co.uk",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-03-21T17:59:13-07:00",
        subject: "ligula eu enim.",
        excerpt:
          "iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique",
        favorite: "0",
        read: "0",
        body: "ac",
        folder: "SENT"
      },
      {
        _id: 100061,
        from: "Giacomo Pacheco",
        from_email: "eget.ipsum.Suspendisse@molestiein.co.uk",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-03-24T13:03:07-07:00",
        subject: "ut lacus.",
        excerpt: "cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna,",
        favorite: "0",
        read: "0",
        body: "ornare,",
        folder: "JUNK"
      },
      {
        _id: 100062,
        from: "Derek Strickland",
        from_email: "Proin.vel@vitaealiquam.edu",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-01-21T05:35:27-08:00",
        subject: "vulputate dui, nec tempus mauris",
        excerpt: "et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
        favorite: "0",
        read: "0",
        body: "pede,",
        folder: "TRASH"
      },
      {
        _id: 100063,
        from: "Alexander Buchanan",
        from_email: "massa.Quisque@tellus.net",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2015-11-07T06:29:14-08:00",
        subject: "sapien, gravida non, sollicitudin a,",
        excerpt:
          "ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus",
        favorite: "0",
        read: "0",
        body: "urna.",
        folder: "OUTBOX"
      },
      {
        _id: 100064,
        from: "Blaze Burke",
        from_email: "commodo@tortordictumeu.edu",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2015-12-04T05:10:02-08:00",
        subject: "Sed id risus",
        excerpt:
          "libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo",
        favorite: "0",
        read: "0",
        body: "Duis",
        folder: "TRASH"
      },
      {
        _id: 100065,
        from: "Peter Gutierrez",
        from_email: "vitae.risus.Duis@pedeet.ca",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-02-08T07:39:49-08:00",
        subject: "Donec tincidunt. Donec vitae erat vel",
        excerpt: "Nunc ut erat. Sed nunc est, mollis non, cursus non,",
        favorite: "0",
        read: "0",
        body: "pharetra.",
        folder: "INBOX"
      },
      {
        _id: 100066,
        from: "Dylan Rhodes",
        from_email: "neque.sed.dictum@Donecnonjusto.ca",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-01-15T05:27:38-08:00",
        subject: "consequat auctor,",
        excerpt: "molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu",
        favorite: "0",
        read: "0",
        body: "lacinia.",
        folder: "INBOX"
      },
      {
        _id: 100067,
        from: "Noah Mann",
        from_email: "Donec@sodalesMaurisblandit.net",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-09-02T15:36:21-07:00",
        subject: "In lorem. Donec",
        excerpt:
          "tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus",
        favorite: "0",
        read: "0",
        body: "semper",
        folder: "SENT"
      },
      {
        _id: 100068,
        from: "Daquan Norris",
        from_email: "risus.Donec.nibh@scelerisqueloremipsum.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-09-01T19:07:02-07:00",
        subject: "ac tellus. Suspendisse sed dolor. Fusce",
        excerpt: "vitae aliquam eros turpis non enim. Mauris quis turpis vitae",
        favorite: "0",
        read: "0",
        body: "mollis",
        folder: "TRASH"
      },
      {
        _id: 100069,
        from: "Walter Pacheco",
        from_email: "morbi.tristique@nibhQuisque.com",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-05-22T02:50:59-07:00",
        subject: "arcu. Nunc mauris. Morbi non",
        excerpt:
          "quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
        favorite: "0",
        read: "0",
        body: "eleifend,",
        folder: "INBOX"
      },
      {
        _id: 100070,
        from: "Gregory Gross",
        from_email: "in.aliquet.lobortis@pede.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-09-05T17:13:08-07:00",
        subject: "Aliquam erat volutpat. Nulla",
        excerpt:
          "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida",
        favorite: "0",
        read: "0",
        body: "Aliquam",
        folder: "SENT"
      },
      {
        _id: 100071,
        from: "Holmes Hardin",
        from_email: "Mauris.blandit.enim@arcuimperdietullamcorper.org",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-07-08T07:17:08-07:00",
        subject: "Cras convallis convallis dolor. Quisque tincidunt",
        excerpt:
          "vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.",
        favorite: "0",
        read: "0",
        body: "mus.",
        folder: "SENT"
      },
      {
        _id: 100072,
        from: "Quinn Bowers",
        from_email: "neque@imperdietullamcorperDuis.net",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-05-21T06:06:28-07:00",
        subject: "nunc est,",
        excerpt:
          "dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean",
        favorite: "0",
        read: "0",
        body: "justo",
        folder: "INBOX"
      },
      {
        _id: 100073,
        from: "Wallace Chambers",
        from_email: "pharetra.ut.pharetra@risusDuis.org",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-07-05T18:06:57-07:00",
        subject: "luctus aliquet odio. Etiam ligula tortor,",
        excerpt: "sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante,",
        favorite: "0",
        read: "0",
        body: "Aliquam",
        folder: "JUNK"
      },
      {
        _id: 100074,
        from: "Grant George",
        from_email: "leo@urna.co.uk",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-05-01T23:38:17-07:00",
        subject: "Donec egestas.",
        excerpt:
          "interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus",
        favorite: "0",
        read: "0",
        body: "nisi",
        folder: "INBOX"
      },
      {
        _id: 100075,
        from: "Arthur Obrien",
        from_email: "dolor@metus.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-02-03T23:18:29-08:00",
        subject: "quam a felis ullamcorper viverra. Maecenas",
        excerpt: "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi",
        favorite: "0",
        read: "0",
        body: "pede",
        folder: "JUNK"
      },
      {
        _id: 100076,
        from: "Justin Salinas",
        from_email: "Phasellus.elit.pede@euismodest.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-08-16T19:32:26-07:00",
        subject: "semper erat, in consectetuer ipsum nunc",
        excerpt:
          "Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In",
        favorite: "0",
        read: "0",
        body: "blandit",
        folder: "INBOX"
      },
      {
        _id: 100077,
        from: "Charles Duffy",
        from_email: "molestie@mollisvitaeposuere.co.uk",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-07-29T12:38:43-07:00",
        subject: "porttitor eros nec tellus. Nunc lectus",
        excerpt:
          "rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis",
        favorite: "0",
        read: "0",
        body: "Curabitur",
        folder: "JUNK"
      },
      {
        _id: 100078,
        from: "Reece Cunningham",
        from_email: "eu@convallis.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-03-24T07:51:24-07:00",
        subject: "et pede. Nunc",
        excerpt:
          "nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae",
        favorite: "0",
        read: "0",
        body: "tellus",
        folder: "OUTBOX"
      },
      {
        _id: 100079,
        from: "Vance Wolf",
        from_email: "auctor.quis.tristique@afacilisis.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-03-11T05:06:59-08:00",
        subject: "sociis natoque penatibus et magnis",
        excerpt: "a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem",
        favorite: "0",
        read: "0",
        body: "primis",
        folder: "JUNK"
      },
      {
        _id: 100080,
        from: "Drake Rivers",
        from_email: "ridiculus@blanditmattis.org",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-04-19T08:35:36-07:00",
        subject: "euismod est arcu",
        excerpt: "eu augue porttitor interdum. Sed auctor odio a purus. Duis",
        favorite: "0",
        read: "0",
        body: "nunc.",
        folder: "TRASH"
      },
      {
        _id: 100081,
        from: "Jared David",
        from_email: "est.ac.mattis@necmollis.com",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-03-06T23:44:34-08:00",
        subject: "aptent taciti sociosqu ad litora",
        excerpt: "tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis",
        favorite: "0",
        read: "0",
        body: "Morbi",
        folder: "SENT"
      },
      {
        _id: 100082,
        from: "Elliott Shaw",
        from_email: "Nulla.eu.neque@Donecatarcu.org",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-06-06T03:15:51-07:00",
        subject: "porttitor tellus non magna. Nam",
        excerpt: "ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis",
        favorite: "0",
        read: "0",
        body: "auctor",
        folder: "JUNK"
      },
      {
        _id: 100083,
        from: "Seth Conway",
        from_email: "Aenean.eget@dapibus.com",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-03-03T02:00:13-08:00",
        subject: "scelerisque mollis. Phasellus libero mauris,",
        excerpt:
          "vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod",
        favorite: "0",
        read: "0",
        body: "at",
        folder: "SENT"
      },
      {
        _id: 100084,
        from: "Elliott Ayala",
        from_email: "Cras@cursusIntegermollis.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-08-14T23:01:32-07:00",
        subject: "commodo at, libero. Morbi accumsan",
        excerpt: "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem,",
        favorite: "0",
        read: "0",
        body: "justo.",
        folder: "OUTBOX"
      },
      {
        _id: 100085,
        from: "Tarik Ross",
        from_email: "mauris.sit.amet@ullamcorper.ca",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2016-02-23T11:08:47-08:00",
        subject: "est. Nunc laoreet",
        excerpt: "ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,",
        favorite: "0",
        read: "0",
        body: "Nunc",
        folder: "INBOX"
      },
      {
        _id: 100086,
        from: "Herrod Joyce",
        from_email: "enim.Mauris@Suspendisse.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-06-07T15:04:20-07:00",
        subject: "ac mi eleifend",
        excerpt: "hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis",
        favorite: "0",
        read: "0",
        body: "tempus",
        folder: "TRASH"
      },
      {
        _id: 100087,
        from: "Marvin Francis",
        from_email: "sed.sem.egestas@antedictum.ca",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2015-10-07T07:19:15-07:00",
        subject: "id ante dictum cursus. Nunc",
        excerpt: "felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
        favorite: "0",
        read: "0",
        body: "felis",
        folder: "INBOX"
      },
      {
        _id: 100088,
        from: "Dylan Bolton",
        from_email: "fringilla.Donec.feugiat@luctus.co.uk",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2015-10-08T02:39:14-07:00",
        subject: "dolor. Quisque tincidunt pede ac",
        excerpt: "luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget,",
        favorite: "0",
        read: "0",
        body: "tellus",
        folder: "SENT"
      },
      {
        _id: 100089,
        from: "Kasper Case",
        from_email: "Donec.porttitor@tempor.org",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-11-17T15:33:10-08:00",
        subject: "lectus pede,",
        excerpt:
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque",
        favorite: "0",
        read: "0",
        body: "non",
        folder: "OUTBOX"
      },
      {
        _id: 100090,
        from: "Harper Edwards",
        from_email: "vel.sapien@utnulla.ca",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-06-01T23:19:51-07:00",
        subject: "blandit congue. In scelerisque scelerisque dui.",
        excerpt:
          "dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec",
        favorite: "0",
        read: "0",
        body: "at,",
        folder: "JUNK"
      },
      {
        _id: 100091,
        from: "Vaughan Franco",
        from_email: "ridiculus.mus.Aenean@est.ca",
        from_avatar: "/dist/images/avatar.png",
        dateCreated: "2016-08-17T17:56:16-07:00",
        subject: "vel arcu. Curabitur ut odio",
        excerpt: "eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis",
        favorite: "0",
        read: "0",
        body: "consectetuer",
        folder: "INBOX"
      },
      {
        _id: 100092,
        from: "Kenyon Shepherd",
        from_email: "bibendum@loremegetmollis.net",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2015-12-08T21:48:11-08:00",
        subject: "mauris sagittis placerat. Cras dictum",
        excerpt: "vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat",
        favorite: "0",
        read: "0",
        body: "semper",
        folder: "TRASH"
      },
      {
        _id: 100093,
        from: "Jonah Lee",
        from_email: "enim.nec@semperauctor.org",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2015-10-21T22:17:18-07:00",
        subject: "Duis ac arcu. Nunc mauris. Morbi",
        excerpt:
          "Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus",
        favorite: "0",
        read: "0",
        body: "ipsum",
        folder: "INBOX"
      },
      {
        _id: 100094,
        from: "Charles Hancock",
        from_email: "montes.nascetur@pedeSuspendisse.ca",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-09-01T18:58:12-07:00",
        subject: "ipsum non",
        excerpt:
          "mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed",
        favorite: "0",
        read: "0",
        body: "vehicula",
        folder: "INBOX"
      },
      {
        _id: 100095,
        from: "Stephen Hatfield",
        from_email: "Nam.tempor@et.co.uk",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-09-08T13:29:21-07:00",
        subject: "aliquet, sem",
        excerpt: "odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus.",
        favorite: "0",
        read: "0",
        body: "amet",
        folder: "INBOX"
      },
      {
        _id: 100096,
        from: "Carter Mccray",
        from_email: "placerat@elementumsem.org",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-07-27T10:57:20-07:00",
        subject: "sit amet nulla. Donec",
        excerpt:
          "ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat",
        favorite: "0",
        read: "0",
        body: "fames",
        folder: "JUNK"
      },
      {
        _id: 100097,
        from: "Zahir Manning",
        from_email: "eu.enim.Etiam@turpis.com",
        from_avatar: "/dist/images/7.png",
        dateCreated: "2015-12-17T08:33:41-08:00",
        subject: "amet, faucibus ut, nulla. Cras eu",
        excerpt:
          "pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut",
        favorite: "0",
        read: "0",
        body: "at,",
        folder: "OUTBOX"
      },
      {
        _id: 100098,
        from: "Hamilton Yates",
        from_email: "interdum.Curabitur.dictum@atarcu.com",
        from_avatar: "/dist/images/img3.jpg",
        dateCreated: "2016-06-02T13:02:23-07:00",
        subject: "per conubia nostra,",
        excerpt: "eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta",
        favorite: "0",
        read: "0",
        body: "Duis",
        folder: "OUTBOX"
      },
      {
        _id: 100099,
        from: "Chase Lane",
        from_email: "In.mi@vestibulumnequesed.edu",
        from_avatar: "/dist/images/5.png",
        dateCreated: "2016-05-04T09:32:22-07:00",
        subject: "adipiscing fringilla,",
        excerpt: "sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi.",
        favorite: "0",
        read: "0",
        body: "Curabitur",
        folder: "OUTBOX"
      }
    ]
  }),
  messages: Object.assign({}, baseInitialState, {
    list: [
      {
        _id: "56f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list 1"
      },
      {
        _id: "256f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "356f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "456f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "556f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "656f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "756f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "856f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "956f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "1056f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "1156f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "1256f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      },
      {
        _id: "1356f2840409415a8b611009ee",
        color: "#2196F3",
        completed: false,
        createdBy: "54b7f2a7a2d4bdde5b96117b",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        description: "A demonstration list",
        group: "56f133615a3e48000000e040",
        icon: "calendar",
        name: "The first list"
      }
    ]
  }),
  boards: Object.assign({}, baseInitialState, {
    list: [
      {
        _id: "576566e35a9aec9dd1badc13",
        name: "",
        app: "560c705e19b4cd51e48aaae1",
        description: "Brands we love",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z",
        collaborators: [],
        owner: "54b7f2a7a2d4bdde5b96117b",
        private: false
      }
    ]
  }),
  pins: Object.assign({}, baseInitialState, {
    list: [
      {
        _id: "5765683b5a9aec9dd1badc14",
        author: {
          _id: "54b7f2a7a2d4bdde5b96117b",
          username: "admin",
          email: "andrew@slightsinthesky.io",
          avatar: "/dist/images/img3.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          __v: 0,
          name: "Admin User",
          meta: {
            points: 20,
            minutes: 10,
            level: 1,
            pointsFromJournals: 0,
            exercisesComplete: ["56212419267e63c53af6357b", "5696a7196670f96f07f23578"],
            assignementsComplete: [],
            notificationsRead: [],
            favorites: [],
            badges: [
              {
                value: 100,
                reference: "minutes",
                icon: "fa-rocket",
                color: "blue",
                description: "Awarded for completing your first exercise",
                title: "A Good Start!",
                id: 0
              }
            ],
            group: "56f133615a3e48000000e040",
            friend: "5624dc5a3b3a9036ef9cc9bb"
          },
          groups: [],
          accepted: true,
          created: "2015-01-08T14:03:47.025Z",
          type: 0
        },
        board: "576566e35a9aec9dd1badc13",
        description: "Color and shape",
        image_url:
          "https://s-media-cache-ak0.pinimg.com/564x/25/4b/97/254b97bef2fe046e9e9845b851529088.jpg",
        source_url: "https://airbnb.ca",
        title: "Airbnb",
        web_url: "https://airbnb.ca",
        dateCreated: "2016-03-22T11:58:25.630Z",
        dateUpdated: "2016-03-22T11:58:25.630Z"
      },
      {
        _id: "5768319caea3dd0000fe3fb5",
        author: {
          _id: "54b7f2a7a2d4bdde5b96117b",
          username: "admin",
          email: "andrew@slightsinthesky.io",
          avatar: "/dist/images/img3.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          __v: 0,
          name: "Admin User",
          meta: {
            points: 20,
            minutes: 10,
            level: 1,
            pointsFromJournals: 0,
            exercisesComplete: ["56212419267e63c53af6357b", "5696a7196670f96f07f23578"],
            assignementsComplete: [],
            notificationsRead: [],
            favorites: [],
            badges: [
              {
                value: 100,
                reference: "minutes",
                icon: "fa-rocket",
                color: "blue",
                description: "Awarded for completing your first exercise",
                title: "A Good Start!",
                id: 0
              }
            ],
            group: "56f133615a3e48000000e040",
            friend: "5624dc5a3b3a9036ef9cc9bb"
          },
          groups: [],
          accepted: true,
          created: "2015-01-08T14:03:47.025Z",
          type: 0
        },
        dateCreated: "2016-06-20T18:10:36.650Z",
        dateUpdated: "2016-06-20T18:10:36.650Z",
        board: "576566e35a9aec9dd1badc13",
        image_url:
          "https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/3260994/workspace_800x600_1x.jpg",
        source_url: "http://ueno.co",
        web_url: "http://ueno.co",
        title: "UENO. Digital agency.",
        __v: 0
      },
      {
        _id: "576836e9aea3dd0000fe3fb6",
        author: {
          _id: "54b7f2a7a2d4bdde5b96117b",
          username: "admin",
          email: "andrew@slightsinthesky.io",
          avatar: "/dist/images/img3.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          __v: 0,
          name: "Admin User",
          meta: {
            points: 20,
            minutes: 10,
            level: 1,
            pointsFromJournals: 0,
            exercisesComplete: ["56212419267e63c53af6357b", "5696a7196670f96f07f23578"],
            assignementsComplete: [],
            notificationsRead: [],
            favorites: [],
            badges: [
              {
                value: 100,
                reference: "minutes",
                icon: "fa-rocket",
                color: "blue",
                description: "Awarded for completing your first exercise",
                title: "A Good Start!",
                id: 0
              }
            ],
            group: "56f133615a3e48000000e040",
            friend: "5624dc5a3b3a9036ef9cc9bb"
          },
          groups: [],
          accepted: true,
          created: "2015-01-08T14:03:47.025Z",
          type: 0
        },
        dateCreated: "2016-06-20T18:33:13.739Z",
        dateUpdated: "2016-06-20T18:33:13.739Z",
        board: "576566e35a9aec9dd1badc13",
        image_url:
          "https://www.mozilla.org/media/img/styleguide/identity/firefox/guidelines-logo.7ea045a4e288.png",
        source_url: "http://mozilla.org",
        web_url: "http://mozilla.org",
        title: "We’re building a better Internet",
        __v: 0
      },
      {
        _id: "57683811aea3dd0000fe3fb8",
        author: {
          _id: "54b7f2a7a2d4bdde5b96117b",
          username: "admin",
          email: "andrew@slightsinthesky.io",
          avatar: "/dist/images/img3.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          __v: 0,
          name: "Admin User",
          meta: {
            points: 20,
            minutes: 10,
            level: 1,
            pointsFromJournals: 0,
            exercisesComplete: ["56212419267e63c53af6357b", "5696a7196670f96f07f23578"],
            assignementsComplete: [],
            notificationsRead: [],
            favorites: [],
            badges: [
              {
                value: 100,
                reference: "minutes",
                icon: "fa-rocket",
                color: "blue",
                description: "Awarded for completing your first exercise",
                title: "A Good Start!",
                id: 0
              }
            ],
            group: "56f133615a3e48000000e040",
            friend: "5624dc5a3b3a9036ef9cc9bb"
          },
          groups: [],
          accepted: true,
          created: "2015-01-08T14:03:47.025Z",
          type: 0
        },
        dateCreated: "2016-06-20T18:38:09.162Z",
        dateUpdated: "2016-06-20T18:38:09.162Z",
        board: "576566e35a9aec9dd1badc13",
        image_url:
          "http://static.digg.com/images/9a311f345f0d404bb223f9ff50be66ab_28INkd0_1_www_large_thumb.jpeg",
        source_url: "http://digg.com",
        web_url: "http://digg.com",
        title: "Digg - What the Internet is talking about right now",
        __v: 0
      },
      {
        _id: "5768555caea3dd0000fe3fb9",
        author: {
          _id: "54b7f2a7a2d4bdde5b96117b",
          username: "admin",
          email: "andrew@slightsinthesky.io",
          avatar: "/dist/images/img3.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          __v: 0,
          name: "Admin User",
          meta: {
            points: 20,
            minutes: 10,
            level: 1,
            pointsFromJournals: 0,
            exercisesComplete: ["56212419267e63c53af6357b", "5696a7196670f96f07f23578"],
            assignementsComplete: [],
            notificationsRead: [],
            favorites: [],
            badges: [
              {
                value: 100,
                reference: "minutes",
                icon: "fa-rocket",
                color: "blue",
                description: "Awarded for completing your first exercise",
                title: "A Good Start!",
                id: 0
              }
            ],
            group: "56f133615a3e48000000e040",
            friend: "5624dc5a3b3a9036ef9cc9bb"
          },
          groups: [],
          accepted: true,
          created: "2015-01-08T14:03:47.025Z",
          type: 0
        },
        dateCreated: "2016-06-20T20:43:08.792Z",
        dateUpdated: "2016-06-20T20:43:08.792Z",
        board: "576566e35a9aec9dd1badc13",
        image_url:
          "https://d1yzzccmb3krkj.cloudfront.net/assets/homepage-heroes/at-home-dark-14040816b386584208cea73b03768b740c1d111a194edc340f891a04b9e2b833.jpg",
        source_url: "https://bluebottlecoffee.com",
        web_url: "https://bluebottlecoffee.com",
        title: "Coffee Roaster - Brewers, Subscriptions & Brewing Guides - Blue Bottle Coffee",
        __v: 0
      },
      {
        _id: "5768569746094c000056b95d",
        author: {
          _id: "5624dbaa3b3a9036ef9cc9b8",
          username: "boss",
          email: "bill@lightsinthesky.io",
          avatar: "https://s3-us-west-2.amazonaws.com/blgio/avatar/img1.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          __v: 0,
          name: "Bill Smith",
          meta: {
            badges: [],
            favorites: [],
            notificationsRead: [],
            assignementsComplete: [],
            exercisesComplete: [],
            pointsFromJournals: 0,
            level: 1,
            minutes: 5,
            points: 0
          },
          groups: [],
          accepted: true,
          created: "2015-01-08T14:03:47.025Z",
          type: 1
        },
        dateCreated: "2016-06-20T20:48:23.516Z",
        dateUpdated: "2016-06-20T20:48:23.516Z",
        board: "576566e35a9aec9dd1badc13",
        image_url:
          "https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/3260994/workspace_800x600_1x.jpg",
        source_url: "http://ueno.co",
        web_url: "http://ueno.co",
        title: "UENO. Digital agency.",
        __v: 0
      }
    ]
  }),
  notes: Object.assign({}, baseInitialState, {
    list: [
      {
        _id: "576a9247973ee9000050264a",
        dateCreated: "2016-06-22T13:27:35.539Z",
        dateUpdated: "2016-06-23T18:45:10.492Z",
        name: "Meeting Notes",
        description: "New Co. discussions",
        excerpt: "This is a short excerpt that can be derived from the draftjs content...",
        app: "56f12aff04475d0000a6cece",
        content: {
          blocks: [
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "BOLD",
                  length: 7,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text:
                "Mission \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi mauris, feugiat mollis mi quis, lobortis venenatis ligula. In luctus diam eu mattis accumsan. ",
              key: "3vvg0"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "drnoe"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "BOLD",
                  length: 6,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text: "Phases \n",
              key: "8nq46"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text:
                "Phase 1 : Nunc dapibus, dolor nec iaculis porta, lectus dolor pellentesque magna, eu accumsan ligula erat id metus. Proin sagittis enim nec orci commodo, eu ultrices elit posuere. Vestibulum non erat laoreet, placerat est varius, commodo magna. Maecenas fermentum imperdiet iaculis. \n",
              key: "l5lq"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text:
                "Phase 2 : Aliquam erat volutpat. Donec vulputate placerat tincidunt. Donec luctus consectetur est sit amet molestie. Proin consectetur consequat tincidunt. \n",
              key: "aqe5r"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text:
                "Phase 3 : Curabitur fermentum lobortis porttitor. Pellentesque imperdiet finibus ex ut tempus. Vivamus bibendum bibendum ante vel vulputate. Vestibulum sit amet nisl vestibulum, suscipit sapien id, lacinia sem. Nam congue felis vel elit posuere accumsan. Donec sem est, suscipit nec dui ac, vestibulum fermentum urna. ",
              key: "6ldir"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "253eg"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "BOLD",
                  length: 8,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text: "End Goal \n",
              key: "4tfdn"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "Exit 3-5 years via revenue value or value of IP. ",
              key: "fises"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "e3dfv"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "BOLD",
                  length: 4,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text: "Need ",
              key: "f7iuf"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "dm4b5"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text:
                "Customers : Nunc nec aliquam diam, id fringilla ligula. Nulla nec nisl lorem. Proin varius felis ac neque tempor placerat et a metus. Aliquam tristique ullamcorper nisi, vitae vestibulum augue mollis nec. Suspendisse interdum sodales ligula, eget sodales ante finibus ultricies. Integer hendrerit finibus vestibulum. Aenean suscipit arcu sed laoreet tempus. Duis eget magna in justo rhoncus pretium vitae malesuada enim. ",
              key: "6itta"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "304i"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text:
                "Approach : Nam eleifend velit et lorem sollicitudin, ac vestibulum nulla finibus. Nam vitae ligula nec sem pharetra faucibus. Aliquam neque nibh, blandit in hendrerit eget, viverra id nunc. Pellentesque eu euismod felis, non consequat urna. Vestibulum pretium ligula felis, et rutrum urna ultricies non. Donec sem odio, ullamcorper ac finibus sit amet, blandit a ex. Nulla ac ligula laoreet, vulputate dui non, ultricies ex. Nullam bibendum mi in eleifend pulvinar.  ",
              key: "eq8i1"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "d2lee"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "UNDERLINE",
                  length: 9,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text: "Machines ",
              key: "9oeei"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "BJ 850 - 80,000  ",
              key: "5ldd6"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "27if5"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "BOLD",
                  length: 13,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text: "Projects",
              key: "eq8qt"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "6nn5g"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "ITALIC",
                  length: 5,
                  offset: 132
                }
              ],
              depth: 0,
              type: "unstyled",
              text:
                "Vivamus vestibulum arcu dolor, eget viverra velit iaculis ac. Nulla facilisi. Proin eu tortor quis dui sagittis aliquet. Integer in justo at urna venenatis placerat. Cras aliquam tortor pretium diam auctor pellentesque. Aenean sit amet ultricies arcu. Ut fermentum lacus ligula, in congue leo lacinia finibus. ",
              key: "8h7mh"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "7klu7"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [
                {
                  style: "BOLD",
                  length: 10,
                  offset: 0
                }
              ],
              depth: 0,
              type: "unstyled",
              text: "Next Steps",
              key: "emk02"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "5k5ma"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text:
                "Nunc sollicitudin ante lacus, vitae consectetur felis euismod sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus diam odio, efficitur nec enim in, tristique placerat tortor.",
              key: "e5v4s"
            },
            {
              entityRanges: [],
              inlineStyleRanges: [],
              depth: 0,
              type: "unstyled",
              text: "",
              key: "e6urb"
            }
          ],
          entityMap: {}
        },
        author: {
          _id: "54b7f2a7a2d4bdde5b96117b",
          username: "admin",
          email: "andrew@slightsinthesky.io",
          accepted: true,
          avatar: "/dist/images/img3.jpg",
          hashedPassword: "e6f70300badd93d9cc4a14c7e5429a9c4f6afe75",
          salt: "Lj4L9hCqXnZPjmxWxS71td0C+9wabhdNBqE8Oyuwa78=",
          orgId: "54babb8ba2d4bdde5b96117d",
          created: "2015-01-08T14:03:47.025Z",
          type: 0,
          __v: 0,
          name: "Admin User",
          meta: {}
        }
      }
    ]
  })
};

export default initialState;
