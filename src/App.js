import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  //Anda akan menggunakan props untuk memberikan nilai yang seharusnya dimiliki setiap kotak dari komponen induk (Board) ke anaknya (Square).
  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  ); //function Square({ value }) menunjukkan komponen Square dapat dioper sebuah prop yang disebut value.
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //mendeklarasikan variabel state bernama squares yang secara default merupakan sebuah senarai berisi 9 null yang sesuai dengan 9 kotak
  return (
    //CSS yang didefinisikan di styles.css memberi style pada div dengan className berupa board-row
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

//Baris pertama mendefinisikan sebuah fungsi bernama Board.
//Kata kunci JavaScript export membuat fungsi ini dapat diakses di luar berkas ini.
// Kata kunci default memberi tahu berkas lain yang menggunakan kode Anda bahwa ini adalah fungsi utama dalam berkas Anda.

// Komponen React harus mengembalikan satu elemen JSX dan bukan beberapa elemen JSX yang berdekatan seperti dua buah tombol.
// Untuk memperbaikinya, Anda dapat menggunakan fragment (<> dan </>)
// untuk membungkus beberapa elemen JSX yang berdekatan seperti ini:

//Untuk “mengingat” sesuatu, komponen menggunakan state.React menyediakan fungsi khusus bernama useState
