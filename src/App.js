import { useState } from "react";

function Square({ value, onSquareClick }) {
  //Anda akan menggunakan props untuk memberikan nilai yang seharusnya dimiliki setiap kotak dari komponen induk (Board) ke anaknya (Square).

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  ); //function Square({ value }) menunjukkan komponen Square dapat dioper sebuah prop yang disebut value.
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); //xIsNext (sebuah boolean) akan dibalik untuk menentukan pemain mana yang akan bergerak selanjutnya dan state permainan akan disimpan
  const [squares, setSquares] = useState(Array(9).fill(null)); //mendeklarasikan variabel state bernama squares yang secara default merupakan sebuah senarai berisi 9 null yang sesuai dengan 9 kotak

  function handleClick(i) {
    //mendefinisikan fungsi handleClick di dalam komponen Board untuk memperbarui senarai squares yang menyimpan state papan Anda
    if (squares[i] || calculateWinner(squares)) {
      return; //membuat agar kotak yang diklik jika sudah ada valuenya tidak berubah atau tetap
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares); //Anda akan menambahkan bagian status ke komponen Board
  let status;
  if (winner) {
    status = "Pemenang: " + winner; //Status akan menampilkan pemenang jika permainan selesai
  } else {
    status = "Pemain selanjutnya: " + (xIsNext ? "X" : "O"); // jika permainan sedang berlangsung, Anda akan menampilkan giliran pemain berikutnya:
  }

  return (
    //CSS yang didefinisikan di styles.css memberi style pada div dengan className berupa board-row
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Catatan
// Tidak masalah apakah Anda mendefinisikan calculateWinner sebelum atau sesudah Board.
// Letakkan di bagian akhir agar Anda tidak perlu menggulir melawatinya setiap kali mengedit komponen.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//Baris pertama mendefinisikan sebuah fungsi bernama Board.
//Kata kunci JavaScript export membuat fungsi ini dapat diakses di luar berkas ini.
// Kata kunci default memberi tahu berkas lain yang menggunakan kode Anda bahwa ini adalah fungsi utama dalam berkas Anda.

// Komponen React harus mengembalikan satu elemen JSX dan bukan beberapa elemen JSX yang berdekatan seperti dua buah tombol.
// Untuk memperbaikinya, Anda dapat menggunakan fragment (<> dan </>)
// untuk membungkus beberapa elemen JSX yang berdekatan seperti ini:

//Untuk “mengingat” sesuatu, komponen menggunakan state.React menyediakan fungsi khusus bernama useState

// Catatan
// Atribut onClick pada elemen DOM <button> memiliki arti khusus untuk React karena merupakan komponen bawaan.
// Untuk komponen kustom seperti Square, penamaan terserah Anda.
// Anda dapat memberikan nama apa pun pada prop Square dengan onSquareClick atau fungsi handleClick pada Board,
// dan kodenya akan bekerja secara sama. Dalam React,
// sudah menjadi hal yang lazim untuk menggunakan nama onSomething untuk props
// yang merepresentasikan event dan handleSomething untuk definisi fungsi yang menangani event tersebut.
