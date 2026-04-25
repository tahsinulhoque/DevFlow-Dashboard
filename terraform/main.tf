resource "aws_s3_bucket" "test_bucket" {
  bucket = "devflow-test-bucket"

  tags = {
    Name        = "DevFlow Test Bucket"
    Environment = "Dev"
  }
}