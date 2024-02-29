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
  }
        
]

export default CustomersData