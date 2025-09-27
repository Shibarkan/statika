function Soal2() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);

  const P1 = parseFloat(document.getElementById("P1").value);
  const P2 = parseFloat(document.getElementById("P2").value);
  const alpha = parseFloat(document.getElementById("alpha").value);
  const P3 = parseFloat(document.getElementById("P3").value);
  const beta = parseFloat(document.getElementById("beta").value);

  const q1 = parseFloat(document.getElementById("q1").value);
  const q2 = parseFloat(document.getElementById("q2").value);

  // Variabel bantu
  let L = b + c;
  

  // Perhitungan VB
  const VB_total =
    -P1 * a +
    q1 * b * (b / 2) +
    P2 * Math.sin((alpha * Math.PI) / 180) * b +
    q2 * (c + d) * (b + (c+d)/2) +  
    P3 * Math.sin((beta * Math.PI) / 180) * (b + c + d);
  const VB = VB_total / L;

  // Perhitungan VA
  let cek = c + (b / 2);
  let jarak_beban_merata_q2_keB = (c + d) / 2;
  let beban_merata = c+d-(jarak_beban_merata_q2_keB+d);

  const VA_total =
    P1 * (a + b + c) +
    q1 * b * cek +
    P2 * Math.sin((alpha * Math.PI) / 180) * c +
    q2 * (c + d) * beban_merata +
    (-P3 * Math.sin((beta * Math.PI) / 180) * d);
  const VA = VA_total / L;

  // Gaya horizontal
  const HA = P2 * Math.cos((alpha * Math.PI) / 180) - P3 * Math.cos((beta * Math.PI) / 180);
  const HA2 = P3 * Math.cos((beta * Math.PI) / 180) - P2 * Math.cos((alpha * Math.PI) / 180);

  // Jumlah gaya vertikal
  let SUM = VA + VB;

  // Tampilkan hasil dengan 3 angka di belakang koma
  document.getElementById("output").innerHTML = `
        <p><strong>Hasil Perhitungan:</strong></p>  
        <p>VA = ${VA.toFixed(5)} kN</p>
        <p>VB = ${VB.toFixed(3)} kN</p>
        <p>VB = ${SUM.toFixed(5)} kN</p>
        <p>--------------- DICARI YANG POSITIF ---------------</p>
        <p>HA = ${HA.toFixed(5)} kN (jika P2 > P3)</p>
        <p>HA = ${HA2.toFixed(3)} kN (jika P3 > P2)</p>
        <p>VA + VB = ${SUM.toFixed(3)} kN</p>
        <p>q2 ke b = ${beban_merata.toFixed(3)} m</p>
    `;
}
