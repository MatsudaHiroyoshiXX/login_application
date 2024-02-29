export interface Customers {
    name: string;
    name_kana: string;
    age: number;
    birth_date: string;
    id: string;
    user_number: number;
    tel: string;
    email: string;
    carNumber: string;
    expiration_date: string;
    transfer_proposal: {
      transfer_proposal_before: string;
      transfer_proposal_after: string;
    };
    update_date: string;
    movie_url: string;
    user_memo: string;
    notification: {
      flag: boolean;
      message: string;
    };
    purchase_history: Purchase[];
  }

  interface Purchase {
    number: number;
    order_number: number;
    order_date: string;
    status: string;
    payment: string;
    total_amount: number;
}


const CustomersData: Customers[] = [
  {
    "name": "佐藤 花子",
    "name_kana": "サトウ ハナコ",
    "age": 35,
    "birth_date": "1989/11/25",
    "id": "ABC-1234-DEF567",
    "user_number": 123456789,
    "tel": "080-9876-5432",
    "email": "sato@example.com",
    "carNumber": "大阪 200 い 2019",
    "expiration_date": "2026/09/30",
    "transfer_proposal": {
      "transfer_proposal_before": "アクアSグレード",
      "transfer_proposal_after": "トヨタC-HR"
    },
    "update_date": "2023/08/17",
    "movie_url": "http://example.com/video/sato",
    "user_memo": "佐藤花子のメモ",
    "notification": {
      "flag": false,
      "message": ""
    },
    "purchase_history": [
      {
        "number": 54321,
        "order_number": 12345,
        "order_date": "2024/01/05",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 150000
      }
    ]
  },
  {
    "name": "鈴木 一郎",
    "name_kana": "スズキ イチロウ",
    "age": 42,
    "birth_date": "1982/06/18",
    "id": "XYZ-9876-WXY321",
    "user_number": 987654321,
    "tel": "070-5432-1098",
    "email": "suzuki@example.com",
    "carNumber": "神奈川 300 ろ 2017",
    "expiration_date": "2025/12/20",
    "transfer_proposal": {
      "transfer_proposal_before": "ヴィッツRS",
      "transfer_proposal_after": "日産ノート"
    },
    "update_date": "2023/10/29",
    "movie_url": "http://example.com/video/suzuki",
    "user_memo": "鈴木一郎のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 98765,
        "order_number": 67890,
        "order_date": "2024/02/20",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 300000
      },
      {
        "number": 98765,
        "order_number": 67890,
        "order_date": "2024/02/20",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 300000
      },
      {
        "number": 98765,
        "order_number": 67890,
        "order_date": "2024/02/20",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 300000
      }
    ]
  },
  {
    "name": "伊藤 健太",
    "name_kana": "イトウ ケンタ",
    "age": 30,
    "birth_date": "1994/07/03",
    "id": "LMN-5678-OPQ901",
    "user_number": 543216789,
    "tel": "080-1234-5678",
    "email": "ito@example.com",
    "carNumber": "埼玉 400 は 2020",
    "expiration_date": "2027/03/25",
    "transfer_proposal": {
      "transfer_proposal_before": "フィットハイブリッド",
      "transfer_proposal_after": "トヨタRAV4"
    },
    "update_date": "2023/09/05",
    "movie_url": "http://example.com/video/ito",
    "user_memo": "伊藤健太のメモ",
    "notification": {
      "flag": false,
      "message": ""
    },
    "purchase_history": [
      {
        "number": 13579,
        "order_number": 24680,
        "order_date": "2024/03/02",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 280000
      }
    ]
  },
  {
    "name": "山田 美加",
    "name_kana": "ヤマダ ミカ",
    "age": 25,
    "birth_date": "1999/12/30",
    "id": "PQR-3456-STU789",
    "user_number": 654321789,
    "tel": "090-9876-5432",
    "email": "yamada@example.com",
    "carNumber": "千葉 500 ほ 2016",
    "expiration_date": "2025/10/10",
    "transfer_proposal": {
      "transfer_proposal_before": "プリウスα",
      "transfer_proposal_after": "ホンダアコード"
    },
    "update_date": "2023/12/30",
    "movie_url": "http://example.com/video/yamada",
    "user_memo": "山田美加のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 24680,
        "order_number": 13579,
        "order_date": "2024/04/15",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 320000
      },
      {
        "number": 24680,
        "order_number": 13579,
        "order_date": "2024/04/15",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 320000
      }
    ]
  },
  {
    "name": "斉藤 次郎",
    "name_kana": "サイトウ ジロウ",
    "age": 38,
    "birth_date": "1986/04/20",
    "id": "MNO-2345-RST678",
    "user_number": 876543219,
    "tel": "070-1234-5678",
    "email": "saito@example.com",
    "carNumber": "京都 600 か 2015",
    "expiration_date": "2025/08/05",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタカムリ",
      "transfer_proposal_after": "日産ティアナ"
    },
    "update_date": "2023/11/05",
    "movie_url": "http://example.com/video/saito",
    "user_memo": "斉藤次郎のメモ",
    "notification": {
      "flag": false,
      "message": ""
    },
    "purchase_history": [
      {
        "number": 36912,
        "order_number": 98765,
        "order_date": "2024/05/20",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 280000
      },
      {
        "number": 36912,
        "order_number": 98765,
        "order_date": "2024/05/20",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 280000
      },
      {
        "number": 36912,
        "order_number": 98765,
        "order_date": "2024/05/20",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 280000
      }
    ]
  },
  {
    "name": "中村 美穂",
    "name_kana": "ナカムラ ミホ",
    "age": 29,
    "birth_date": "1995/08/15",
    "id": "EFG-6789-HIJ012",
    "user_number": 765432198,
    "tel": "090-5432-1098",
    "email": "nakamura@example.com",
    "carNumber": "北海道 700 な 2017",
    "expiration_date": "2026/11/15",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタハリアー",
      "transfer_proposal_after": "ホンダCR-V"
    },
    "update_date": "2023/10/15",
    "movie_url": "http://example.com/video/nakamura",
    "user_memo": "中村美穂のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 78901,
        "order_number": 54321,
        "order_date": "2024/06/10",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 250000
      }
    ]
  },
  {
    "name": "小林 太郎",
    "name_kana": "コバヤシ タロウ",
    "age": 32,
    "birth_date": "1992/01/10",
    "id": "STU-4567-VWX890",
    "user_number": 654321987,
    "tel": "080-5432-1098",
    "email": "kobayashi@example.com",
    "carNumber": "福岡 800 ま 2018",
    "expiration_date": "2027/07/20",
    "transfer_proposal": {
      "transfer_proposal_before": "日産セレナ",
      "transfer_proposal_after": "トヨタノア"
    },
    "update_date": "2023/12/03",
    "movie_url": "http://example.com/video/kobayashi",
    "user_memo": "小林太郎のメモ",
    "notification": {
      "flag": false,
      "message": ""
    },
    "purchase_history": [
      {
        "number": 98765,
        "order_number": 67890,
        "order_date": "2024/07/25",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 300000
      },
      {
        "number": 98765,
        "order_number": 67890,
        "order_date": "2024/07/25",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 300000
      },
      {
        "number": 98765,
        "order_number": 67890,
        "order_date": "2024/07/25",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 300000
      }
    ]
  },
  {
    "name": "加藤 美咲",
    "name_kana": "カトウ ミサキ",
    "age": 27,
    "birth_date": "1997/05/05",
    "id": "NOP-8901-QRS234",
    "user_number": 543219876,
    "tel": "090-1234-5678",
    "email": "kato@example.com",
    "carNumber": "愛知 900 や 2019",
    "expiration_date": "2026/04/05",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダフィット",
      "transfer_proposal_after": "スバルフォレスター"
    },
    "update_date": "2023/11/10",
    "movie_url": "http://example.com/video/kato",
    "user_memo": "加藤美咲のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 12345,
        "order_number": 54321,
        "order_date": "2024/08/20",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 200000
      },
      {
        "number": 12345,
        "order_number": 54321,
        "order_date": "2024/08/20",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 200000
      }
    ]
  },
  {
    "name": "山口 優希",
    "name_kana": "ヤマグチ ユウキ",
    "age": 33,
    "birth_date": "1989/03/08",
    "id": "UVW-0123-XYZ456",
    "user_number": 432198765,
    "tel": "070-9876-5432",
    "email": "yamaguchi@example.com",
    "carNumber": "沖縄 1000 た 2016",
    "expiration_date": "2026/05/15",
    "transfer_proposal": {
      "transfer_proposal_before": "日産ノート",
      "transfer_proposal_after": "ホンダシャトル"
    },
    "update_date": "2023/12/20",
    "movie_url": "http://example.com/video/yamaguchi",
    "user_memo": "山口優希のメモ",
    "notification": {
      "flag": false,
      "message": ""
    },
    "purchase_history": [
      {
        "number": 24680,
        "order_number": 13579,
        "order_date": "2024/09/05",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 320000
      },
      {
        "number": 24680,
        "order_number": 13579,
        "order_date": "2024/09/05",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 320000
      }
    ]
  },
  {
    "name": "松本 さくら",
    "name_kana": "マツモト サクラ",
    "age": 26,
    "birth_date": "1998/10/22",
    "id": "GHI-4567-JKL890",
    "user_number": 321987654,
    "tel": "080-1234-5678",
    "email": "matsumoto@example.com",
    "carNumber": "青森 1100 さ 2017",
    "expiration_date": "2025/08/10",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタカローラ",
      "transfer_proposal_after": "日産セレナ"
    },
    "update_date": "2023/10/01",
    "movie_url": "http://example.com/video/matsumoto",
    "user_memo": "松本さくらのメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 67890,
        "order_number": 98765,
        "order_date": "2024/10/30",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 270000
      }
    ]
  },
  {
    "name": "山本 健一",
    "name_kana": "ヤマモト ケンイチ",
    "age": 37,
    "birth_date": "1987/09/17",
    "id": "HIJ-2345-KLM678",
    "user_number": 543219876,
    "tel": "090-5432-1098",
    "email": "yamamoto@example.com",
    "carNumber": "岡山 1200 た 2018",
    "expiration_date": "2027/01/05",
    "transfer_proposal": {
      "transfer_proposal_before": "レクサスIS",
      "transfer_proposal_after": "トヨタヴィッツ"
    },
    "update_date": "2023/11/15",
    "movie_url": "http://example.com/video/yamamoto",
    "user_memo": "山本健一のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 43210,
        "order_number": 98765,
        "order_date": "2024/11/10",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 220000
      },
      {
        "number": 43210,
        "order_number": 98765,
        "order_date": "2024/11/10",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 220000
      }
    ]
  },
  {
    "name": "加藤 優子",
    "name_kana": "カトウ ユウコ",
    "age": 31,
    "birth_date": "1993/06/05",
    "id": "QRS-6789-TUV012",
    "user_number": 876543219,
    "tel": "070-9876-5432",
    "email": "katou@example.com",
    "carNumber": "兵庫 1300 は 2016",
    "expiration_date": "2025/12/20",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダフリード",
      "transfer_proposal_after": "日産エクストレイル"
    },
    "update_date": "2023/11/20",
    "movie_url": "http://example.com/video/katou",
    "user_memo": "加藤優子のメモ",
    "notification": {
      "flag": false,
      "message": ""
    },
    "purchase_history": [
      {
        "number": 54321,
        "order_number": 12345,
        "order_date": "2024/12/25",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 180000
      }
    ]
  },
  {
    "name": "山田 健太",
    "name_kana": "ヤマダ ケンタ",
    "age": 28,
    "birth_date": "1996/03/12",
    "id": "JKL-4567-PQR890",
    "user_number": 987654321,
    "tel": "090-1234-5678",
    "email": "yamada@example.com",
    "carNumber": "東京 100 か 2018",
    "expiration_date": "2025/06/15",
    "transfer_proposal": {
      "transfer_proposal_before": "プリウスSグレード",
      "transfer_proposal_after": "レクサスRX"
    },
    "update_date": "2023/11/21",
    "movie_url": "http://example.com/video/yamada",
    "user_memo": "山田健太のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 67890,
        "order_number": 54321,
        "order_date": "2025/01/15",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 230000
      }
    ]
  },
  {
    "name": "山田 太郎",
    "name_kana": "ヤマダ タロウ",
    "age": 38,
    "birth_date": "1986/11/07",
    "id": "DEF-4567-PQR890",
    "user_number": 111111111,
    "tel": "090-1111-2222",
    "email": "yamada@example.com",
    "carNumber": "千葉 400 た 2020",
    "expiration_date": "2026/08/31",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタハリアー",
      "transfer_proposal_after": "ホンダCR-V"
    },
    "update_date": "2023/12/01",
    "movie_url": "http://example.com/video/yamada",
    "user_memo": "山田太郎のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 13579,
        "order_number": 24680,
        "order_date": "2024/01/20",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 280000
      },
      {
        "number": 24680,
        "order_number": 13579,
        "order_date": "2024/02/05",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 195000
      }
    ]
  },
  {
    "name": "高橋 さちこ",
    "name_kana": "タカハシ サチコ",
    "age": 27,
    "birth_date": "1997/05/18",
    "id": "GHI-1234-JKL567",
    "user_number": 222222222,
    "tel": "080-2222-3333",
    "email": "takahashi@example.com",
    "carNumber": "埼玉 500 な 2018",
    "expiration_date": "2027/10/15",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダフィット",
      "transfer_proposal_after": "スバルXV"
    },
    "update_date": "2023/11/30",
    "movie_url": "http://example.com/video/takahashi",
    "user_memo": "高橋さちこのメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 11111,
        "order_number": 22222,
        "order_date": "2024/02/12",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 210000
      },
      {
        "number": 22222,
        "order_number": 11111,
        "order_date": "2024/02/26",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 320000
      }
    ]
  },
  {
    "name": "中村 俊介",
    "name_kana": "ナカムラ シュンスケ",
    "age": 35,
    "birth_date": "1989/09/08",
    "id": "MNO-5678-STU901",
    "user_number": 333333333,
    "tel": "070-3333-4444",
    "email": "nakamura@example.com",
    "carNumber": "東京 600 は 2016",
    "expiration_date": "2028/03/25",
    "transfer_proposal": {
      "transfer_proposal_before": "日産ティアナ",
      "transfer_proposal_after": "トヨタカムリ"
    },
    "update_date": "2023/12/20",
    "movie_url": "http://example.com/video/nakamura",
    "user_memo": "中村俊介のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 33333,
        "order_number": 44444,
        "order_date": "2024/01/30",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 150000
      }
    ]
  },
  {
    "name": "斎藤 美咲",
    "name_kana": "サイトウ ミサキ",
    "age": 29,
    "birth_date": "1995/03/22",
    "id": "PQR-9012-UVW345",
    "user_number": 444444444,
    "tel": "080-4444-5555",
    "email": "saito@example.com",
    "carNumber": "福岡 700 ま 2019",
    "expiration_date": "2027/12/18",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタCHR",
      "transfer_proposal_after": "ホンダヴェゼル"
    },
    "update_date": "2023/10/10",
    "movie_url": "http://example.com/video/saito",
    "user_memo": "斎藤美咲のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 44444,
        "order_number": 55555,
        "order_date": "2024/01/15",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 220000
      }
    ]
  },
  {
    "name": "伊藤 修一",
    "name_kana": "イトウ シュウイチ",
    "age": 40,
    "birth_date": "1984/08/15",
    "id": "STU-3456-XYZ789",
    "user_number": 555555555,
    "tel": "090-5555-6666",
    "email": "ito@example.com",
    "carNumber": "沖縄 800 お 2017",
    "expiration_date": "2029/05/10",
    "transfer_proposal": {
      "transfer_proposal_before": "日産ノート",
      "transfer_proposal_after": "トヨタヴォクシー"
    },
    "update_date": "2023/09/05",
    "movie_url": "http://example.com/video/ito",
    "user_memo": "伊藤修一のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 55555,
        "order_number": 66666,
        "order_date": "2024/01/10",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 200000
      }
    ]
  },
  {
    "name": "加藤 真理子",
    "name_kana": "カトウ マリコ",
    "age": 35,
    "birth_date": "1989/12/28",
    "id": "UVW-6789-ABC012",
    "user_number": 666666666,
    "tel": "080-6666-7777",
    "email": "kato@example.com",
    "carNumber": "愛知 900 か 2021",
    "expiration_date": "2030/02/28",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダヴェゼル",
      "transfer_proposal_after": "トヨタハリアー"
    },
    "update_date": "2023/08/20",
    "movie_url": "http://example.com/video/kato",
    "user_memo": "加藤真理子のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 66666,
        "order_number": 77777,
        "order_date": "2024/02/22",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 230000
      }
    ]
  },
  {
    "name": "木村 太郎",
    "name_kana": "キムラ タロウ",
    "age": 28,
    "birth_date": "1996/06/20",
    "id": "HIJ-9012-ABC345",
    "user_number": 777777777,
    "tel": "090-7777-8888",
    "email": "kimura@example.com",
    "carNumber": "福島 1000 は 2018",
    "expiration_date": "2029/11/05",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタアクア",
      "transfer_proposal_after": "トヨタノア"
    },
    "update_date": "2023/07/25",
    "movie_url": "http://example.com/video/kimura",
    "user_memo": "木村太郎のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 77777,
        "order_number": 88888,
        "order_date": "2024/01/28",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 260000
      }
    ]
  },
  {
    "name": "吉田 さやか",
    "name_kana": "ヨシダ サヤカ",
    "age": 31,
    "birth_date": "1993/04/17",
    "id": "KLM-2345-DEF678",
    "user_number": 888888888,
    "tel": "080-8888-9999",
    "email": "yoshida@example.com",
    "carNumber": "岐阜 1100 か 2016",
    "expiration_date": "2028/06/12",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタカローラ",
      "transfer_proposal_after": "日産セレナ"
    },
    "update_date": "2023/06/10",
    "movie_url": "http://example.com/video/yoshida",
    "user_memo": "吉田さやかのメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 88888,
        "order_number": 99999,
        "order_date": "2024/02/08",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 190000
      }
    ]
  },
  {
    "name": "小林 健太",
    "name_kana": "コバヤシ ケンタ",
    "age": 33,
    "birth_date": "1991/10/30",
    "id": "NOP-3456-GHI789",
    "user_number": 999999999,
    "tel": "090-9999-0000",
    "email": "kobayashi@example.com",
    "carNumber": "栃木 1200 た 2019",
    "expiration_date": "2030/09/30",
    "transfer_proposal": {
      "transfer_proposal_before": "日産ノート",
      "transfer_proposal_after": "トヨタカムリ"
    },
    "update_date": "2023/05/15",
    "movie_url": "http://example.com/video/kobayashi",
    "user_memo": "小林健太のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 99999,
        "order_number": 11111,
        "order_date": "2024/01/03",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 270000
      }
    ]
  },
  {
    "name": "田辺 真悠子",
    "name_kana": "タナベ マユコ",
    "age": 29,
    "birth_date": "1995/09/03",
    "id": "QRS-4567-WXY890",
    "user_number": 111122223333,
    "tel": "080-1234-5678",
    "email": "tanabe@example.com",
    "carNumber": "京都 1300 た 2018",
    "expiration_date": "2029/04/25",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタアクア",
      "transfer_proposal_after": "ホンダフィット"
    },
    "update_date": "2023/04/12",
    "movie_url": "http://example.com/video/tanabe",
    "user_memo": "田辺真悠子のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 11111,
        "order_number": 22222,
        "order_date": "2024/02/18",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 180000
      }
    ]
  },
  {
    "name": "渡辺 健太郎",
    "name_kana": "ワタナベ ケンタロウ",
    "age": 34,
    "birth_date": "1990/03/15",
    "id": "TUV-6789-XYZ012",
    "user_number": 444455556666,
    "tel": "090-9876-5432",
    "email": "watanabe@example.com",
    "carNumber": "大阪 1400 た 2019",
    "expiration_date": "2030/07/20",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダフィット",
      "transfer_proposal_after": "トヨタカローラ"
    },
    "update_date": "2023/03/20",
    "movie_url": "http://example.com/video/watanabe",
    "user_memo": "渡辺健太郎のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 22222,
        "order_number": 33333,
        "order_date": "2024/01/22",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 220000
      }
    ]
  },
  {
    "name": "山口 佳奈",
    "name_kana": "ヤマグチ カナ",
    "age": 37,
    "birth_date": "1987/11/28",
    "id": "UVW-8901-ABC234",
    "user_number": 777788889999,
    "tel": "080-5555-1234",
    "email": "yamaguchi@example.com",
    "carNumber": "北海道 1500 は 2017",
    "expiration_date": "2028/10/15",
    "transfer_proposal": {
      "transfer_proposal_before": "日産ノート",
      "transfer_proposal_after": "トヨタヴォクシー"
    },
    "update_date": "2023/02/05",
    "movie_url": "http://example.com/video/yamaguchi",
    "user_memo": "山口佳奈のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 33333,
        "order_number": 44444,
        "order_date": "2024/02/05",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 210000
      }
    ]
  },
  {
    "name": "岡田 裕子",
    "name_kana": "オカダ ユウコ",
    "age": 30,
    "birth_date": "1994/05/10",
    "id": "IJK-2345-DEF678",
    "user_number": 888899990000,
    "tel": "070-3333-7777",
    "email": "okada@example.com",
    "carNumber": "愛媛 1600 あ 2018",
    "expiration_date": "2029/09/30",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダフィット",
      "transfer_proposal_after": "日産ノート"
    },
    "update_date": "2023/01/10",
    "movie_url": "http://example.com/video/okada",
    "user_memo": "岡田裕子のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 44444,
        "order_number": 55555,
        "order_date": "2024/01/15",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 190000
      }
    ]
  },
  {
    "name": "橋本 修",
    "name_kana": "ハシモト オサム",
    "age": 42,
    "birth_date": "1982/12/20",
    "id": "XYZ-0123-UVW456",
    "user_number": 999900001111,
    "tel": "080-1111-4444",
    "email": "hashimoto@example.com",
    "carNumber": "熊本 1700 か 2019",
    "expiration_date": "2030/03/20",
    "transfer_proposal": {
      "transfer_proposal_before": "日産セレナ",
      "transfer_proposal_after": "トヨタアルファード"
    },
    "update_date": "2022/12/15",
    "movie_url": "http://example.com/video/hashimoto",
    "user_memo": "橋本修のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 55555,
        "order_number": 66666,
        "order_date": "2024/02/10",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 250000
      }
    ]
  },
  {
    "name": "村田 郁子",
    "name_kana": "ムラタ イクコ",
    "age": 33,
    "birth_date": "1991/08/23",
    "id": "ABC-4567-DEF890",
    "user_number": 1111222233334444,
    "tel": "090-1111-2222",
    "email": "murata@example.com",
    "carNumber": "福島 1800 い 2019",
    "expiration_date": "2030/01/10",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタプリウス",
      "transfer_proposal_after": "ホンダフリード"
    },
    "update_date": "2022/11/20",
    "movie_url": "http://example.com/video/murata",
    "user_memo": "村田郁子のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 66666,
        "order_number": 77777,
        "order_date": "2024/01/22",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 220000
      }
    ]
  },
  {
    "name": "佐々木 裕美",
    "name_kana": "ササキ ヒロミ",
    "age": 28,
    "birth_date": "1996/12/15",
    "id": "DEF-6789-GHI012",
    "user_number": 2222333344445555,
    "tel": "080-2222-3333",
    "email": "sasaki@example.com",
    "carNumber": "東京 1900 さ 2020",
    "expiration_date": "2031/03/05",
    "transfer_proposal": {
      "transfer_proposal_before": "日産ノート",
      "transfer_proposal_after": "トヨタヴォクシー"
    },
    "update_date": "2022/10/25",
    "movie_url": "http://example.com/video/sasaki",
    "user_memo": "佐々木裕美のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 77777,
        "order_number": 88888,
        "order_date": "2024/02/18",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 180000
      }
    ]
  },
  {
    "name": "加藤 貴之",
    "name_kana": "カトウ タカユキ",
    "age": 40,
    "birth_date": "1984/05/05",
    "id": "GHI-9012-JKL345",
    "user_number": 3333444455556666,
    "tel": "090-3333-4444",
    "email": "katou@example.com",
    "carNumber": "宮城 2000 ま 2016",
    "expiration_date": "2029/07/15",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタカムリ",
      "transfer_proposal_after": "日産セレナ"
    },
    "update_date": "2022/09/30",
    "movie_url": "http://example.com/video/katou",
    "user_memo": "加藤貴之のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 88888,
        "order_number": 99999,
        "order_date": "2024/01/28",
        "status": "配送済み",
        "payment": "銀行振込",
        "total_amount": 260000
      }
    ]
  },
  {
    "name": "伊藤 直人",
    "name_kana": "イトウ ナオト",
    "age": 35,
    "birth_date": "1989/02/28",
    "id": "JKL-2345-MNO678",
    "user_number": 4444555566667777,
    "tel": "080-4444-5555",
    "email": "itou@example.com",
    "carNumber": "新潟 2100 な 2017",
    "expiration_date": "2028/11/20",
    "transfer_proposal": {
      "transfer_proposal_before": "トヨタプリウス",
      "transfer_proposal_after": "ホンダフィット"
    },
    "update_date": "2022/08/15",
    "movie_url": "http://example.com/video/itou",
    "user_memo": "伊藤直人のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 99999,
        "order_number": 11111,
        "order_date": "2024/02/08",
        "status": "配送済み",
        "payment": "代金引換",
        "total_amount": 190000
      }
    ]
  },
  {
    "name": "山田 明美",
    "name_kana": "ヤマダ アケミ",
    "age": 38,
    "birth_date": "1986/07/07",
    "id": "MNO-7890-PQR123",
    "user_number": 9999111122223333,
    "tel": "090-9999-8888",
    "email": "yamada@example.com",
    "carNumber": "広島 2200 は 2019",
    "expiration_date": "2030/09/10",
    "transfer_proposal": {
      "transfer_proposal_before": "ホンダフィット",
      "transfer_proposal_after": "トヨタヴィッツ"
    },
    "update_date": "2022/07/10",
    "movie_url": "http://example.com/video/yamada",
    "user_memo": "山田明美のメモ",
    "notification": {
      "flag": true,
      "message": "新着情報があります"
    },
    "purchase_history": [
      {
        "number": 11111,
        "order_number": 22222,
        "order_date": "2024/01/10",
        "status": "配送済み",
        "payment": "クレジットカード",
        "total_amount": 200000
      }
    ]
  }
        
]

export default CustomersData