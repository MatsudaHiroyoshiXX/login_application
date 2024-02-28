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
    purchase_history: {
      number: number;
      order_number: number;
      order_date: string;
      status: string;
      payment: string;
      total_amount: number;
    };
  }


const CustomersData: Customers[] = [
    {
        "name": "田中 太郎",
        "name_kana": "タナカ タロウ",
        "age": 28,
        "birth_date": "1996/03/12",
        "id": "JKL-4567-PQR890",
        "user_number": 987654321,
        "tel": "090-1234-5678",
        "email": "tanaka@example.com",
        "carNumber": "東京 100 か 2018",
        "expiration_date": "2025/06/15",
        "transfer_proposal": {
          "transfer_proposal_before": "プリウスSグレード",
          "transfer_proposal_after": "レクサスRX"
        },
        "update_date": "2023/11/21",
        "movie_url": "http://example.com/video/tanaka",
        "user_memo": "田中太郎のメモ",
        "notification": {
          "flag": true,
          "message": "新着情報があります"
        },
        "purchase_history": {
          "number": 12345,
          "order_number": 54321,
          "order_date": "2024/02/10",
          "status": "配送済み",
          "payment": "クレジットカード",
          "total_amount": 250000
        }
      },
      {
        "name": "佐藤 花子",
        "name_kana": "サトウ ハナコ",
        "age": 35,
        "birth_date": "1991/08/25",
        "id": "MNO-7890-STU123",
        "user_number": 123456789,
        "tel": "080-9876-5432",
        "email": "sato@example.com",
        "carNumber": "神奈川 200 な 2019",
        "expiration_date": "2024/09/20",
        "transfer_proposal": {
          "transfer_proposal_before": "アクアXグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/10/15",
        "movie_url": "http://example.com/video/sato",
        "user_memo": "佐藤花子のメモ",
        "notification": {
          "flag": true,
          "message": "新着情報があります"
        },
        "purchase_history": {
          "number": 54321,
          "order_number": 9876543,
          "order_date": "2024/01/30",
          "status": "配送中",
          "payment": "銀行振込",
          "total_amount": 150000
        }
      },
      {
        "name": "鈴木 健太",
        "name_kana": "スズキ ケンタ",
        "age": 42,
        "birth_date": "1979/12/03",
        "id": "PQR-2345-VWX678",
        "user_number": 135792468,
        "tel": "070-5555-6666",
        "email": "suzuki@example.com",
        "carNumber": "埼玉 300 さ 2017",
        "expiration_date": "2023/11/30",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/09/01",
        "movie_url": "http://example.com/video/suzuki",
        "user_memo": "鈴木健太のメモ",
        "notification": {
          "flag": false,
          "message": "特にありません"
        },
        "purchase_history": {
          "number": 67890,
          "order_number": 24681357,
          "order_date": "2023/04/15",
          "status": "受領済み",
          "payment": "クレジットカード",
          "total_amount": 180000
        }
      },
      {
        "name": "木村 美和",
        "name_kana": "キムラ ミワ",
        "age": 31,
        "birth_date": "1993/05/08",
        "id": "STU-3456-ABC901",
        "user_number": 246813579,
        "tel": "080-3333-4444",
        "email": "kimura@example.com",
        "carNumber": "東京 500 た 2020",
        "expiration_date": "2025/03/25",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴェゼルXグレード",
          "transfer_proposal_after": "アコードハイブリッドEグレード"
        },
        "update_date": "2023/07/18",
        "movie_url": "http://example.com/video/kimura",
        "user_memo": "木村美和のメモ",
        "notification": {
          "flag": true,
          "message": "ご確認ください"
        },
        "purchase_history": {
          "number": 98765,
          "order_number": 1357924,
          "order_date": "2023/10/20",
          "status": "配達済み",
          "payment": "銀行振込",
          "total_amount": 200000
        }
      },
      {
        "name": "加藤 健司",
        "name_kana": "カトウ ケンジ",
        "age": 45,
        "birth_date": "1979/09/21",
        "id": "UVW-6789-XYZ234",
        "user_number": 987654321,
        "tel": "090-9876-5432",
        "email": "kato@example.com",
        "carNumber": "大阪 100 あ 2016",
        "expiration_date": "2023/08/11",
        "transfer_proposal": {
          "transfer_proposal_before": "アクアXグレード",
          "transfer_proposal_after": "プリウスプライムSグレード"
        },
        "update_date": "2023/12/05",
        "movie_url": "http://example.com/video/kato",
        "user_memo": "加藤健司のメモ",
        "notification": {
          "flag": false,
          "message": "未読のメッセージがあります"
        },
        "purchase_history": {
          "number": 56789,
          "order_number": 987654,
          "order_date": "2023/12/30",
          "status": "配送中",
          "payment": "クレジットカード",
          "total_amount": 220000
        }
      },
      {
        "name": "伊藤 美佳",
        "name_kana": "イトウ ミカ",
        "age": 33,
        "birth_date": "1991/02/14",
        "id": "XYZ-7890-DEF567",
        "user_number": 135792468,
        "tel": "080-1111-2222",
        "email": "ito@example.com",
        "carNumber": "神奈川 300 さ 2017",
        "expiration_date": "2024/07/01",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴェゼルXグレード",
          "transfer_proposal_after": "CR-VハイブリッドSグレード"
        },
        "update_date": "2023/06/30",
        "movie_url": "http://example.com/video/ito",
        "user_memo": "伊藤美佳のメモ",
        "notification": {
          "flag": true,
          "message": "ご確認ください"
        },
        "purchase_history": {
          "number": 98765,
          "order_number": 543219,
          "order_date": "2024/03/12",
          "status": "配送済み",
          "payment": "銀行振込",
          "total_amount": 180000
        }
      },
      {
        "name": "渡辺 健一",
        "name_kana": "ワタナベ ケンイチ",
        "age": 29,
        "birth_date": "1995/11/30",
        "id": "ABC-1234-XYZ987",
        "user_number": 987654321,
        "tel": "090-2222-3333",
        "email": "watanabe@example.com",
        "carNumber": "東京 200 は 2019",
        "expiration_date": "2023/07/11",
        "transfer_proposal": {
          "transfer_proposal_before": "プリウスUグレード",
          "transfer_proposal_after": "アルファードXグレード"
        },
        "update_date": "2023/03/24",
        "movie_url": "http://example.com/video/watanabe",
        "user_memo": "渡辺健一のメモ",
        "notification": {
          "flag": false,
          "message": "メッセージテキスト"
        },
        "purchase_history": {
          "number": 12345,
          "order_number": 1234567,
          "order_date": "2023/07/11",
          "status": "注文済み",
          "payment": "クレジットカード",
          "total_amount": 200000
        }
      },
      {
        "name": "山田 花子",
        "name_kana": "ヤマダ ハナコ",
        "age": 25,
        "birth_date": "1999/05/15",
        "id": "DEF-5678-WXY654",
        "user_number": 987654321,
        "tel": "111-1111-1111",
        "email": "dummy1@example.com",
        "carNumber": "神奈川 500 ま 2020",
        "expiration_date": "2025/10/20",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/08/12",
        "movie_url": "http://example.com/video/b",
        "user_memo": "ダミーテキストダミーテキストダミーテキスト",
        "notification": {
          "flag": true,
          "message": "通知メッセージ"
        },
        "purchase_history": {
          "number": 54321,
          "order_number": 7654321,
          "order_date": "2024/01/30",
          "status": "配送中",
          "payment": "銀行振込",
          "total_amount": 150000
        }
      },
      {
        "name": "佐藤 太郎",
        "name_kana": "サトウ タロウ",
        "age": 30,
        "birth_date": "1994/08/03",
        "id": "GHI-9012-ZAB345",
        "user_number": 246813579,
        "tel": "222-2222-2222",
        "email": "dummy2@example.com",
        "carNumber": "東京 100 い 2018",
        "expiration_date": "2024/12/05",
        "transfer_proposal": {
          "transfer_proposal_before": "アクアXグレード",
          "transfer_proposal_after": "プリウスプライムSグレード"
        },
        "update_date": "2023/09/25",
        "movie_url": "http://example.com/video/c",
        "user_memo": "ダミーテキストダミーテキストダミーテキスト",
        "notification": {
          "flag": false,
          "message": "メッセージ"
        },
        "purchase_history": {
          "number": 67890,
          "order_number": 9876543,
          "order_date": "2023/11/18",
          "status": "配達済み",
          "payment": "クレジットカード",
          "total_amount": 180000
        }
      },
      {
        "name": "鈴木 花子",
        "name_kana": "スズキ ハナコ",
        "age": 35,
        "birth_date": "1989/04/07",
        "id": "HIJ-2345-CDE678",
        "user_number": 135792468,
        "tel": "333-3333-3333",
        "email": "dummy3@example.com",
        "carNumber": "埼玉 200 さ 2019",
        "expiration_date": "2026/03/30",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/12/18",
        "movie_url": "http://example.com/video/d",
        "user_memo": "ダミーテキストダミーテキストダミーテキスト",
        "notification": {
          "flag": true,
          "message": "通知メッセージ"
        },
        "purchase_history": {
          "number": 56789,
          "order_number": 8765432,
          "order_date": "2023/10/05",
          "status": "受領済み",
          "payment": "銀行振込",
          "total_amount": 200000
        }
      },
      {
        "name": "高橋 健一",
        "name_kana": "タカハシ ケンイチ",
        "age": 40,
        "birth_date": "1984/11/20",
        "id": "LMN-3456-EFG901",
        "user_number": 987654321,
        "tel": "444-4444-4444",
        "email": "takahashi@example.com",
        "carNumber": "神奈川 300 か 2016",
        "expiration_date": "2023/12/20",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴェゼルXグレード",
          "transfer_proposal_after": "アコードハイブリッドEグレード"
        },
        "update_date": "2023/11/30",
        "movie_url": "http://example.com/video/takahashi",
        "user_memo": "高橋健一のメモ",
        "notification": {
          "flag": false,
          "message": "新着情報があります"
        },
        "purchase_history": {
          "number": 34567,
          "order_number": 7654321,
          "order_date": "2023/09/01",
          "status": "配送済み",
          "payment": "クレジットカード",
          "total_amount": 180000
        }
      },
      {
        "name": "伊藤 健太",
        "name_kana": "イトウ ケンタ",
        "age": 27,
        "birth_date": "1997/02/28",
        "id": "OPQ-4567-XYZ234",
        "user_number": 135792468,
        "tel": "555-5555-5555",
        "email": "ito@example.com",
        "carNumber": "大阪 100 さ 2017",
        "expiration_date": "2024/10/01",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/11/02",
        "movie_url": "http://example.com/video/ito",
        "user_memo": "伊藤健太のメモ",
        "notification": {
          "flag": true,
          "message": "ご確認ください"
        },
        "purchase_history": {
          "number": 12345,
          "order_number": 543219,
          "order_date": "2024/04/15",
          "status": "受領済み",
          "payment": "銀行振込",
          "total_amount": 200000
        }
      },
      {
        "name": "山本 美佳",
        "name_kana": "ヤマモト ミカ",
        "age": 32,
        "birth_date": "1992/07/22",
        "id": "QRS-5678-ABC901",
        "user_number": 987654321,
        "tel": "666-6666-6666",
        "email": "yamamoto@example.com",
        "carNumber": "東京 500 た 2020",
        "expiration_date": "2025/08/15",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴェゼルXグレード",
          "transfer_proposal_after": "CR-VハイブリッドSグレード"
        },
        "update_date": "2023/09/30",
        "movie_url": "http://example.com/video/yamamoto",
        "user_memo": "山本美佳のメモ",
        "notification": {
          "flag": true,
          "message": "ご確認ください"
        },
        "purchase_history": {
          "number": 54321,
          "order_number": 8765432,
          "order_date": "2024/01/20",
          "status": "配送中",
          "payment": "銀行振込",
          "total_amount": 180000
        }
      },
      {
        "name": "中村 健太",
        "name_kana": "ナカムラ ケンタ",
        "age": 37,
        "birth_date": "1987/04/18",
        "id": "TUV-6789-DEF234",
        "user_number": 135792468,
        "tel": "777-7777-7777",
        "email": "nakamura@example.com",
        "carNumber": "大阪 200 あ 2018",
        "expiration_date": "2024/04/30",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/08/20",
        "movie_url": "http://example.com/video/nakamura",
        "user_memo": "中村健太のメモ",
        "notification": {
          "flag": false,
          "message": "特にありません"
        },
        "purchase_history": {
          "number": 98765,
          "order_number": 9876543,
          "order_date": "2023/12/10",
          "status": "受領済み",
          "payment": "クレジットカード",
          "total_amount": 200000
        }
      },
      {
        "name": "斎藤 美和",
        "name_kana": "サイトウ ミワ",
        "age": 26,
        "birth_date": "1998/11/05",
        "id": "UVW-1234-XYZ567",
        "user_number": 987654321,
        "tel": "888-8888-8888",
        "email": "saito@example.com",
        "carNumber": "埼玉 400 か 2019",
        "expiration_date": "2025/05/05",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴェゼルXグレード",
          "transfer_proposal_after": "CR-VハイブリッドSグレード"
        },
        "update_date": "2023/07/12",
        "movie_url": "http://example.com/video/saito",
        "user_memo": "斎藤美和のメモ",
        "notification": {
          "flag": true,
          "message": "ご確認ください"
        },
        "purchase_history": {
          "number": 67890,
          "order_number": 24681357,
          "order_date": "2023/05/05",
          "status": "受領済み",
          "payment": "銀行振込",
          "total_amount": 180000
        }
      },
      {
        "name": "小林 健太",
        "name_kana": "コバヤシ ケンタ",
        "age": 39,
        "birth_date": "1985/12/10",
        "id": "ABC-3456-DEF789",
        "user_number": 135792468,
        "tel": "999-9999-9999",
        "email": "kobayashi@example.com",
        "carNumber": "神奈川 200 か 2017",
        "expiration_date": "2023/10/15",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/09/02",
        "movie_url": "http://example.com/video/kobayashi",
        "user_memo": "小林健太のメモ",
        "notification": {
          "flag": true,
          "message": "新着情報があります"
        },
        "purchase_history": {
          "number": 12345,
          "order_number": 8765432,
          "order_date": "2023/11/20",
          "status": "配送中",
          "payment": "クレジットカード",
          "total_amount": 180000
        }
      },
      {
        "name": "吉田 花子",
        "name_kana": "ヨシダ ハナコ",
        "age": 34,
        "birth_date": "1990/02/28",
        "id": "DEF-6789-WXY012",
        "user_number": 987654321,
        "tel": "123-4567-8901",
        "email": "yoshida@example.com",
        "carNumber": "東京 300 た 2016",
        "expiration_date": "2024/11/30",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/06/29",
        "movie_url": "http://example.com/video/yoshida",
        "user_memo": "吉田花子のメモ",
        "notification": {
          "flag": false,
          "message": "特にありません"
        },
        "purchase_history": {
          "number": 54321,
          "order_number": 7654321,
          "order_date": "2023/12/25",
          "status": "配送済み",
          "payment": "銀行振込",
          "total_amount": 200000
        }
      },
      {
        "name": "山口 健太",
        "name_kana": "ヤマグチ ケンタ",
        "age": 36,
        "birth_date": "1988/07/17",
        "id": "MNO-9012-STU345",
        "user_number": 135792468,
        "tel": "222-3333-4444",
        "email": "yamaguchi@example.com",
        "carNumber": "埼玉 100 あ 2015",
        "expiration_date": "2023/09/20",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/12/28",
        "movie_url": "http://example.com/video/yamaguchi",
        "user_memo": "山口健太のメモ",
        "notification": {
          "flag": true,
          "message": "新着情報があります"
        },
        "purchase_history": {
          "number": 67890,
          "order_number": 24681357,
          "order_date": "2023/03/05",
          "status": "受領済み",
          "payment": "銀行振込",
          "total_amount": 180000
        }
      },
      {
        "name": "岡田 美佳",
        "name_kana": "オカダ ミカ",
        "age": 33,
        "birth_date": "1991/10/02",
        "id": "PQR-7890-UVW123",
        "user_number": 987654321,
        "tel": "555-1234-5678",
        "email": "okada@example.com",
        "carNumber": "神奈川 300 さ 2017",
        "expiration_date": "2024/06/10",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴェゼルXグレード",
          "transfer_proposal_after": "CR-VハイブリッドSグレード"
        },
        "update_date": "2023/10/22",
        "movie_url": "http://example.com/video/okada",
        "user_memo": "岡田美佳のメモ",
        "notification": {
          "flag": true,
          "message": "新着情報があります"
        },
        "purchase_history": {
          "number": 98765,
          "order_number": 24681357,
          "order_date": "2024/01/10",
          "status": "配送済み",
          "payment": "クレジットカード",
          "total_amount": 200000
        }
      },
      {
        "name": "中島 健太",
        "name_kana": "ナカジマ ケンタ",
        "age": 38,
        "birth_date": "1986/04/29",
        "id": "LMN-2345-EFG678",
        "user_number": 135792468,
        "tel": "777-2222-3333",
        "email": "nakajima@example.com",
        "carNumber": "大阪 100 さ 2016",
        "expiration_date": "2023/12/05",
        "transfer_proposal": {
          "transfer_proposal_before": "ヴィッツSグレード",
          "transfer_proposal_after": "カローラハイブリッドGグレード"
        },
        "update_date": "2023/08/05",
        "movie_url": "http://example.com/video/nakajima",
        "user_memo": "中島健太のメモ",
        "notification": {
          "flag": false,
          "message": "特にありません"
        },
        "purchase_history": {
          "number": 12345,
          "order_number": 8765432,
          "order_date": "2023/10/25",
          "status": "受領済み",
          "payment": "クレジットカード",
          "total_amount": 180000
        }
      }
        
]

export default CustomersData