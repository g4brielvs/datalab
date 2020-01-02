#!/usr/bin/perl -w
use strict;

my $filename = "node_modules/react-vis/es/sankey/index.js";
print "\n\n replacing lines in $filename... \n\n";

my $lineOne = read_file($filename);
my $lineTwo = read_file($filename);

$lineOne =~ s/\.nodes\(nodesCopy\)/\.nodes\(nodesCopy\)\.nodeId\(d \=\> d\.name\)/g;
$lineTwo =~ s/oneOfType\(\[PropTypes\.number/oneOfType\(\[PropTypes.string/g;

write_file($filename, $lineOne);
write_file($filename, $lineTwo);
exit;

sub read_file {
  my ($filename) = @_;
  open my $in, '<:encoding(UTF-8)', $filename or die "Could not open '$filename' for reading $!";
  local $/ = undef;
  my $all = <$in>;
  close $in;
  return $all;
}

sub write_file {
  my ($filename, $content) = @_;
  open my $out, '>:encoding(UTF-8)', $filename or die "Could not open '$filename' for writing $!";;
  print $out $content;
  close $out;
  return;
}
