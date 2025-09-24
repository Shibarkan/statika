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
  let L = a + b + c + d;
  let X = (c + d) / 2;
  let tes = X + b;

  // let segitiga = (2 / 3) * b;
  // let bantuan = L - (a + b);
  // let cek = Number((a + segitiga + bantuan).toFixed(1));
  // let cek2 = Number((L - cek).toFixed(1));

  // Perhitungan VA
  const VA_total =
    -P1 * a +
    q1 * b * (b / 2) +
    P2 * Math.sin((alpha * Math.PI) / 180) * b +
    q2 * (c + d) * tes +
    P3 * Math.sin((beta * Math.PI) / 180) * (b + c + d);
  const VA = VA_total / L;

  //bantuan buat VB
  let jarak_beban_merata_keB = b + c - b / 2;
  let jarak_beban_merata_q2_keB = (c + d) / 2;
  let beban_merata = b + c - (b + c - jarak_beban_merata_q2_keB);
  const VB_total =
    P1 * (a + b + c) +
    q1 * b * jarak_beban_merata_keB +
    P2 * Math.sin((alpha * Math.PI) / 180) * c +
    q2 * (c + d) * beban_merata +
    -P3 * Math.sin((beta * Math.PI) / 180) * d;
  const VB = VB_total / L;

  const HA = P2 * Math.cos((alpha * Math.PI) / 180) - P3 * Math.cos((beta * Math.PI) / 180);
  const HA2 = P3 * Math.cos((beta * Math.PI) / 180) - P2 * Math.cos((alpha * Math.PI) / 180);

  let SUM = VA + VB;

  // let ArahP2 = P2 * Math.cos((alpha * Math.PI) / 180);
  // let ArahP3 = P3 * Math.cos((beta * Math.PI) / 180);
  // const HA = 0;

  // if(ArahP2 > ArahP3){
  //   HA = ArahP2 - ArahP3;
  // }else{
  //   HA = ArahP3 - ArahP2;
  // }

  // if(ArahP2 > ArahP3){
  //   const HA_sementara = ArahP2 - ArahP3;
  // }else{
  //   const HA_sementara = ArahP3 - ArahP2;
  // }

  // const HA = HA_sementara;

  // Perhitungan VB
  // const VB_total =
  //   q1 * a * (a / 2) +
  //   P1 * Math.sin((alpha * Math.PI) / 180) * (L - (bantuan + b)) +
  //   P2 * (L - b) +
  //   0.5 * q2 * b * (L - cek2);
  // const VB = VB_total / L;

  // Jumlah VA + VB
  // const SUM = VA + VB;

  // HA
  // const HA = P1 * Math.cos((alpha * Math.PI) / 180);

  // Rumus kontrol
  // const totalGayaVertikal =
  //   q1 * a + P1 * Math.sin((alpha * Math.PI) / 180) + P2 + q2 * b / 2;
  // const kontrolVA_VB = Math.abs(SUM - totalGayaVertikal) < 0.01 ? "✅" : "❌";

  // const kontrolHA = Math.abs(HA - P1 * Math.cos((alpha * Math.PI) / 180)) < 0.01 ? "✅" : "❌";

  // Tampilkan hasil lengkap + kontrol
  document.getElementById("output").innerHTML = `
        <p><strong>Hasil Perhitungan:</strong></p>  
        <p>VA = ${VA.toFixed(3)} kN</p>
        <p>VB = ${VB.toFixed(3)} kN</p>
        <p>---------------DICARI YANG POSITIF-----------</p>
        <p>HA = ${HA.toFixed(3)} kN (jika hasil P2 lebih besar dari P3</p>
        <p>HA = ${HA2.toFixed(3)} kN (jika hasil P3 lebih besar dari P2</p>
        <p>VA + VB = ${SUM.toFixed(3)} kN</p>


    `;
}
