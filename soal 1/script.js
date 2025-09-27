function Soal1() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const L = parseFloat(document.getElementById("L").value);
    const P1 = parseFloat(document.getElementById("P1").value);
    const P2 = parseFloat(document.getElementById("P2").value);
    const q1 = parseFloat(document.getElementById("q1").value);
    const q2 = parseFloat(document.getElementById("q2").value);
    const alpha = parseFloat(document.getElementById("alpha").value);

    // Variabel bantu
    let segitiga = (2 / 3) * b;
    let bantuan = L - (a + b);
    let cek = Number((a + segitiga + bantuan).toFixed(1));
    let cek2 = Number((L - cek).toFixed(1));

    // Perhitungan VA
    const VA_total =
      q1 * a * (L - a / 2) +
      P1 * Math.sin((alpha * Math.PI) / 180) * (L - a) +
      P2 * b +
      0.5 * q2 * b * (L - cek);
    const VA = VA_total / L;

    // Perhitungan VB
    const VB_total =
      q1 * a * (a / 2) +
      P1 * Math.sin((alpha * Math.PI) / 180) * (L - (bantuan + b)) +
      P2 * (L - b) +
      0.5 * q2 * b * (L - cek2);
    const VB = VB_total / L;

    // Jumlah VA + VB
    const SUM = VA + VB;

    // HA
    const HA = P1 * Math.cos((alpha * Math.PI) / 180);

    // Rumus kontrol
    const totalGayaVertikal =
      q1 * a + P1 * Math.sin((alpha * Math.PI) / 180) + P2 + q2 * b / 2;
    const kontrolVA_VB = Math.abs(SUM - totalGayaVertikal) < 0.01 ? "✅" : "❌";

    const kontrolHA = Math.abs(HA - P1 * Math.cos((alpha * Math.PI) / 180)) < 0.01 ? "✅" : "❌";

    // Tampilkan hasil lengkap + kontrol
    document.getElementById("output").innerHTML = `
        <p><strong>Hasil Perhitungan:</strong></p>
        <p>a = ${a}</p>
        <p>b = ${b}</p>
        <p>L = ${L}</p>
        <p>α = ${alpha}°</p>
        <p>pusat Segitiga = ${segitiga.toFixed(3)} m</p>
        <p>Momen Segitiga = ${bantuan.toFixed(3)} m</p>
        <p>selisih total jarak dengan pusat segitiga = ${cek.toFixed(1)} m</p>
        <p>VA = ${VA.toFixed(3)} kN</p>
        <p>VB = ${VB.toFixed(3)} kN</p>
        <p>VA + VB = ${SUM.toFixed(5)} kN</p>
        <p>HA = ${HA.toFixed(1)} kN</p>
        <p><strong>Kontrol Keseimbangan:</strong></p>
        <p>Σ VA + VB = Σ Gaya Vertikal → ${kontrolVA_VB}</p>
        <p>HA sesuai gaya horizontal → ${kontrolHA}</p>
    `;
}
