const ArxanKiller = {
    init() {
        ArxanKiller.kill_lv1_checksum_bitcode_checksum_guard();
        ArxanKiller.kill_lv1_debugger_antidebug_guard_proc_tracerpid();
        ArxanKiller.kill_lv1_checksum_bitcode_2_checksum_guard();
        ArxanKiller.kill_titan_lv2_checksum_checksum_guard();
        ArxanKiller.kill_lv2_checksum_exec_prob_timer();
        ArxanKiller.kill_lv1_stack_verify();
    },
    kill_lv1_checksum_bitcode_checksum_guard() {
        Armceptor.jumpout(Libg.offset(0x555DB4), Libg.offset(0x563E6C));
    },
    kill_lv1_debugger_antidebug_guard_proc_tracerpid() {
        Interceptor.replace(Module.findExportByName('libc.so', 'openat'), new NativeCallback(function(dirfd, pathname) {
            return -1;
        }, 'int', ['int', 'pointer']));
    },
    kill_lv1_checksum_bitcode_2_checksum_guard() {
        Armceptor.jumpout(Libg.offset(0x99304C), Libg.offset(0x994118));
    },
    kill_titan_lv2_checksum_checksum_guard() {
        Armceptor.jumpout(Libg.offset(0x6B4B3C), Libg.offset(0x6B5F7C));
    },
    kill_lv2_checksum_exec_prob_timer() {
        Armceptor.jumpout(Libg.offset(0x9E9278), Libg.offset(0x9EA548));
    },
    kill_lv1_stack_verify() {
        Interceptor.replace(Libg.AntiCheat.addr.guard_callback, new NativeCallback(function(a1) {
        }, 'void', ['int']));

        Armceptor.ret(Libg.AntiCheat.addr.update);
    }
}

rpc.exports.init = function() {
    ArxanKiller.init();
}
