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
5. yang pertama dijalankan register dulu, untuk mendapatkan user sehingga bisa login,
6. baru setelah login toke bisa diakes dan semua fitur yang membutuhkan token dapat dijalankan
