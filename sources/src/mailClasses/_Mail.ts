import { report } from "../interfaces";

/**
 * メール抽象クラス
 * @author catdance124
 */
export abstract class Mail {
    /**
     *  メールの件名
     */
    subject: string;

    /**
     * コンストラクタ
     * @param mailSubject メールの件名
     */
    protected constructor(mailSubject: string) {
        this.subject = mailSubject;
    }

    /**
     * メールから情報を抽出するメソッド
     * @param plainBody メールの本文
     * @returns 抽出された情報
     */
    protected abstract _extract(plainBody: string): report;

    /**
     * メールを処理するメソッド
     * @param plainBody メールの本文
     * @returns 抽出された情報
     */
    abstract processMail(plainBody: string): report;
}
