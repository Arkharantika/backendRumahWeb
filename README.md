SETTING APLIKASI
----------------

1. untuk menjalankannya anda harus menggunakan PHP mysql
2. Buat databasenya, lalu samakan dengan nama yang sesuai pada coding pada folder config/database.js seperti dibawah ini 

#nama database wow atau terserah anda menamai nya apa 
const DB = new Sequelize("wow", "root", "", {
  host: "localhost",
  dialect: "mysql",
  // timezone: "+07:00",
});

3. kemudian pada folder utama ketik npm i --legacy-peer-deps pada main folder (yang ada file index.js nya) untuk instalasi modul
4. buka postman dan import colection yang nomor 3

PROSES APLIKASI dan POSTMAN
---------------------------

5. jalankan file, dengan mengetikkan "node index.js"
6. yang pertama dijalankan fungsi "*register*" dulu, lalu "*login*" dengan user yg sudah berhasil di register 
7. setelah login, jalankan "*get token*" untuk bisa mendapatkan token, yang nantinya di masukan ke dalam "*authorization*", dengan value "*Bearer <token>*"
8. setiap API selain login dan register harus menyertakan "*authorization*", dengan value "*Bearer <token>*" pada header nya
9. baru setelah login toke bisa diakes dan semua fitur yang membutuhkan token dapat dijalankan
10. Terdapat fitur "*logout*" apabila hendak logout
