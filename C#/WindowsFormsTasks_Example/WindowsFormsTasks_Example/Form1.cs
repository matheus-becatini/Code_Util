using System;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsTasks_Example
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void RichTextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void Button1_Click(object sender, EventArgs e)
        {
            this.button1.Enabled = false;

            var result = Task.Factory.StartNew(() => DownloadHTML());
            result.ContinueWith(x =>
            {
                this.richTextBox1.Clear();
                this.richTextBox1.Text = x.Result;
                this.button1.Enabled = true;
            }, TaskScheduler.FromCurrentSynchronizationContext());

            this.richTextBox1.Text = "Fazendo Download ...";
        }

        private string DownloadHTML()
        {
            var client = new WebClient
            {
                Encoding = Encoding.UTF8
            };
            Thread.Sleep(5000);
            try
            {
                return client.DownloadString(this.textBox1.Text);
            }catch(Exception ex)
            {
                return "URL inválida! Error: " + ex;
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.button1.Enabled = false;
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(this.textBox1.Text))
                this.button1.Enabled = true;
            else
                this.button1.Enabled = false;
        }
    }
}
