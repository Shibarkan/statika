function Soal3() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);
  const e = parseFloat(document.getElementById("d").value);

  const P1 = parseFloat(document.getElementById("P1").value);
  const P2 = parseFloat(document.getElementById("P2").value);
  // const alpha = parseFloat(document.getElementById("alpha").value);
  // const P3 = parseFloat(document.getElementById("P3").value);
  // const beta = parseFloat(document.getElementById("beta").value);

  const q1 = parseFloat(document.getElementById("q1").value);
  const q2 = parseFloat(document.getElementById("q2").value);
  const q3 = parseFloat(document.getElementById("q3").value);

  //Mencari  VC dan VS
  let jarak_S_ke_C = e;
  // Sigma moment S
  const VC_total = ((q3 * e * 0.5 * 2) / 3) * 3.5;
  const VC = VC_total / jarak_S_ke_C;
  // sigma moment C
  const VS_total = ((q3 * e * 0.5 * 1) / 3) * 3.5;
  const VS = VS_total / jarak_S_ke_C;

  // Variabel bantu
  // sigma MA = 0
  let q1_bebanpusat = b/2;
  let beban_Q1 = q1_bebanpusat - a;
  let L = a + b;
  const VB_total =
    -P1 * a +
    q1 * (a + b) * beban_Q1 +
    P2 * b +
    q2 * c * (c / 2 + b) +
    VS * (b + c + d);

  const VB = VB_total / L;
  const beban_q1 = beban_Q1;

  // Jumlah gaya vertikal

  // Tampilkan hasil dengan 3 angka di belakang koma
  document.getElementById("output").innerHTML = `
        <p><strong>Hasil Perhitungan:</strong></p>  
        <p>VC = ${VC.toFixed(5)} kN</p>
        <p>VS = ${VS.toFixed(5)} kN</p>
        <p>VB = ${VB.toFixed(5)} kN</p>
        <p>Beban q1 = ${beban_Q1} kN</p>

    `;
}
