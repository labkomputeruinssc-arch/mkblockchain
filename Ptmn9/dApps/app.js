const btnConnect = document.getElementById('btnConnect');
const elAddress = document.getElementById('address');
const elSaldo = document.getElementById('saldo');

btnConnect.addEventListener('click', async () => {
    // 1. Cek apakah MetaMask tersedia
    if (!window.ethereum) {
        alert('MetaMask tidak terdeteksi. Pasang dulu ekstensinya.');
        return;
    }
    try {
        // 2. Minta izin koneksi (pop-up MetaMask)
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // 3. Provider lewat wallet browser, lalu signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        // 4. Baca saldo (call — gratis, tanpa gas)
        const balance = await provider.getBalance(address);

        elAddress.innerText = address;
        elSaldo.innerText = ethers.formatEther(balance) + ' ETH';
    } catch (err) {
        // Pengguna menutup/menolak pop-up MetaMask
        alert('Koneksi dibatalkan: ' + err.message);
    }
});
